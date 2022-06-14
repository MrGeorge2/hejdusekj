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
    /// Create a new language
    /// </summary>
    /// <param name="languageCode"></param>
    /// <returns></returns>
    public async Task<Language> CreateLanguageAsync(string languageCode)
    {
        var language = new Language(languageCode);
        
        _localizationContext.Add(language);
        
        await _localizationContext.SaveChangesAsync();
        
        return language;
    }

    /// <summary>
    /// Create a new localization
    /// </summary>
    /// <param name="localization"></param>
    /// <returns></returns>
    public async Task<Localization> CreateLocalizationAsync(Localization localization)
    {
        _localizationContext.Add(localization);
        await _localizationContext.SaveChangesAsync();
        return localization;
    }

    /// <summary>
    /// Check if the language exists.
    /// </summary>
    /// <param name="languageCode"></param>
    /// <returns></returns>
    public async Task<bool> LanguageExistsAsync(string languageCode)
    {
        return await _localizationContext.Languages
                .AnyAsync(x => x.LanguageCode == languageCode);
    }

    /// <summary>
    /// Checks if the localization exists.
    /// </summary>
    /// <param name="languageCode"></param>
    /// <param name="key"></param>
    /// <returns></returns>
    public async Task<bool> LocalizationExistsAsync(string languageCode, string key)
    {
        return await _localizationContext.Localizations
                .AnyAsync(x => x.Language.LanguageCode == languageCode && x.Key == key);
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

    /// <summary>
    /// Get language by id.
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    public async Task<Language?> GetLanguage(long id)
    {
        return await _localizationContext.Languages.FirstOrDefaultAsync(x => x.Id == id);
    }

    /// <summary>
    /// Get language by languageCode
    /// </summary>
    /// <param name="languageCode"></param>
    /// <returns></returns>
    public async Task<Language?> GetLanguage(string languageCode)
    {
        return await _localizationContext.Languages.FirstOrDefaultAsync(x => x.LanguageCode == languageCode);
    }
}