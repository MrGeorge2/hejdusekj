using GraphServer.Models;

namespace GraphServer.Services;

public interface ILocalizationService
{
    /// <summary>
    /// Get Languages as IQueryable
    /// </summary>
    IQueryable<Language> GetLanguages();

    /// <summary>
    /// Gets the localization for the specified language.
    /// </summary>
    IQueryable<Localization> GetLocalizations(string languageCode);

    /// <summary>
    /// Gets the localization for the specified language.
    /// </summary>
    IQueryable<Localization> GetLocalization(string languageCode, string key);
}