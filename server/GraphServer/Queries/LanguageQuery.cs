using GraphServer.Data;
using GraphServer.Models;
using GraphServer.Services;

namespace GraphServer.Queries;

[ExtendObjectType(typeof(QueryType))]
public class LanguageQuery
{
    /// <summary>
    /// Gets a language
    /// </summary>
    [UseFirstOrDefault]
    [UsePaging(MaxPageSize = 1)]
    [UseProjection]
    public IQueryable<Language?> Language([Service] ILocalizationService localizationService, string languageCode)
    {
        return localizationService.GetLanguages().Where(x => x.LanguageCode == languageCode);
    }

    /// <summary>
    /// Gets a localizations
    /// </summary>
    [UseFirstOrDefault]
    [UsePaging(MaxPageSize = 100)]
    [UseProjection]
    public IQueryable<Localization> GetLocalizations([Service] ILocalizationService localizationService, string languageCode)
    {
        return localizationService.GetLocalizations(languageCode);
    }

    /// <summary>
    /// Get localization by language and localization key
    /// </summary>
    [UseFirstOrDefault]
    [UsePaging(MaxPageSize = 100)]
    [UseProjection]
    public IQueryable<Localization> GetLocalization([Service] ILocalizationService localizationService, string languageCode, string key)
    {
        return localizationService.GetLocalization(languageCode, key);
    }
}