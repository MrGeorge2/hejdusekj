using GraphServer.Data;
using GraphServer.Models;
using Microsoft.EntityFrameworkCore;

namespace GraphServer.Services;

public class LocalizationService : ILocalizationService
{
    private readonly LocalizationContext _localizationContext;
    public LocalizationService(
        LocalizationContext localizationContext)
    {
        _localizationContext = localizationContext;
    }

    /// <summary>
    /// Gets language with its localizations
    /// </summary>
    public async Task<Language?> GetLanguageAsync(string languageCode, int page, int pageSize, CancellationToken cancellationToken = default)
    {
        var language = await _localizationContext.Languages.FirstOrDefaultAsync(x => x.LanguageCode == languageCode, cancellationToken);
        if (language == null)
        {
            return null;
        }

        var localizations = await _localizationContext.Localizations.Where(x => x.LanguageId == language.Id).Skip(pageSize * page).Take(pageSize).ToListAsync();

        localizations.ForEach(x => language.Localizations.Add(x));

        return language;
    }

    /// <summary>
    /// Gets the localization for the specified language.
    /// </summary>
    public async Task<Localization?> GetLocalizationAsync(string languageCode, string key, CancellationToken cancellationToken = default)
    {
        var language = await _localizationContext.Languages
            .FirstOrDefaultAsync(x => x.LanguageCode == languageCode, cancellationToken);

        if (language == null)
        {
            return null;
        }

        return await _localizationContext.Localizations
            .FirstOrDefaultAsync(x => x.Key == key && x.LanguageId == language.Id, cancellationToken);
    }

    /// <summary>
    /// Gets the localization for the specified language.
    /// </summary>
    public async Task<IList<Localization>?> GetLocalizationsAsync(string languageCode, int page, int pageSize, CancellationToken cancellationToken = default)
    {
        var language = await _localizationContext.Languages
            .FirstOrDefaultAsync(x => x.LanguageCode == languageCode, cancellationToken);

        if (language == null)
        {
            return null;
        }

        return await _localizationContext.Localizations
            .Where(x => x.LanguageId == language.Id)
            .Skip(page * pageSize)
            .Take(pageSize)
            .ToListAsync(cancellationToken);
    }
}