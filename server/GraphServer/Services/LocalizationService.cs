using GraphServer.Data;
using GraphServer.Models;
using Microsoft.EntityFrameworkCore;

namespace GraphServer.Services;

public class LocalizationService : ILocalizationService
{
    private readonly LocalizationContext _localizationContext;
    public LocalizationService(LocalizationContext localizationContext)
    {
        _localizationContext = localizationContext;
    }

    /// <summary>
    /// Get language
    /// </summary>
    public IQueryable<Language> GetLanguages()
    {
        return _localizationContext.Languages;
    }

    /// <summary>
    /// Gets the localization for the specified language.
    /// </summary>
    public IQueryable<Localization> GetLocalization(string languageCode, string key)
    {
        return _localizationContext.Localizations
            .Where(x => x.Language.LanguageCode == languageCode && x.Key == key);
    }

    /// <summary>
    /// Gets the localization for the specified language.
    /// </summary>
    public IQueryable<Localization> GetLocalizations(string languageCode)
    {
        return _localizationContext.Localizations
            .Where(x => x.Language.LanguageCode == languageCode);
    }
}