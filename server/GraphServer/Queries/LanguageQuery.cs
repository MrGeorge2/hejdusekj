using GraphServer.Models;
using GraphServer.Services;

namespace GraphServer.Queries;

public partial class Query
{
    /// <summary>
    /// Gets a language
    /// </summary>
    public async Task<Language?> Language([Service] ILocalizationService localizationService, string languageCode, int page, int pageSize = 100)
    {
        return await localizationService.GetLanguageAsync(languageCode, page, pageSize);
    }

    /// <summary>
    /// Gets a localizations
    /// </summary>
    public async Task<IList<Localization>?> GetLocalizations([Service] ILocalizationService localizationService, string languageCode, int page, int pageSize)
    {
        return await localizationService.GetLocalizationsAsync(languageCode, page, pageSize);
    }

    /// <summary>
    /// Get localization by language and localization key
    /// </summary>
    public async Task<Localization?> GetLocalization([Service] ILocalizationService localizationService, string languageCode, string key)
    {
        return await localizationService.GetLocalizationAsync(languageCode, key);
    }
}