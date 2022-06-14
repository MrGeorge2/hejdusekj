using GraphServer.Models;
using GraphServer.Services;
using Newtonsoft.Json;

namespace GraphServer.Seeder;

public class LocalizationSeeder : ILocalizationSeeder
{
    #region  CTOR
    private readonly ILocalizationService _localizationService;

    public LocalizationSeeder(ILocalizationService localizationService)
    {
        _localizationService = localizationService;
    }
    #endregion

    /// <summary>
    /// Get path to the folder where the seeders are located.
    /// </summary>
    /// <value></value>
    private static string _seederPath
    {
        get
        {
            return System.IO.Path.Combine(
                AppDomain.CurrentDomain.BaseDirectory, "Seeder/SeedFiles/localizations.json");
        }
    }

    /// <summary>
    /// Seed localizations to the database.
    /// </summary>
    /// <returns></returns>
    public async Task SeedAsync()
    {
        var localizations = GetLocalizations();

        if (localizations == null || localizations.Localizations == null)
            return;

        if (localizations.Localizations.Any() == false)
            return;

        foreach (var localization in localizations.Localizations)
        {
            Language? language = await _localizationService.GetLanguage(localization.LanguageCode);

            // Create language if it doesn't exist.
            if (language == null)
                language = await _localizationService.CreateLanguageAsync(localization.LanguageCode);

            // If localization already exists, skip it.
            if (await _localizationService.LocalizationExistsAsync(language.LanguageCode, localization.Key))
                continue;

            // Create localization.
            var localizationEntity = new Localization(localization.Key, localization.Value, language);
            await _localizationService.CreateLocalizationAsync(localizationEntity);
        }

    }

    /// <summary>
    ///  Returns a list of deserialized JSON objects from the seed file.
    /// </summary>
    /// <returns></returns>
    private LanguageSerialization? GetLocalizations()
    {
        var seedFile = System.IO.File.ReadAllText(_seederPath);
        var localizations = JsonConvert.DeserializeObject<LanguageSerialization>(seedFile);
        return localizations;
    }

    private record LocalizationSerialization(string LanguageCode, string Key, string Value);

    private record LanguageSerialization(List<LocalizationSerialization> Localizations);
}

