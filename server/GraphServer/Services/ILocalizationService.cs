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

    /// <summary>
    /// Check if the language exists.
    /// </summary>
    /// <param name="languageCode"></param>
    /// <returns></returns>
    Task<bool> LanguageExistsAsync(string languageCode);

    /// <summary>
    /// Checks if the localization exists.
    /// </summary>
    /// <param name="languageCode"></param>
    /// <param name="key"></param>
    /// <returns></returns>
    Task<bool> LocalizationExistsAsync(string languageCode, string key);

    /// <summary>
    /// Get language by id
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    Task<Language?> GetLanguage(long id);

    /// <summary>
    /// Get language by languageCode
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    Task<Language?> GetLanguage(string languageCode);

    /// <summary>
    /// Creates a new language.
    /// </summary>
    /// <param name="languageCode"></param>
    /// <returns></returns>
    Task<Language> CreateLanguageAsync(string languageCode);

    /// <summary>
    /// Create a new localization
    /// </summary>
    /// <param name="localization"></param>
    /// <returns></returns>
    Task <Localization> CreateLocalizationAsync(Localization localization);
}