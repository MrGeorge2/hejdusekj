using GraphServer.Models;

namespace GraphServer.Services;

public interface ILocalizationService
{

    /// <summary>
    /// Get language
    /// </summary>
    Task<Language?> GetLanguageAsync(string languageCode, int page, int pageSize, CancellationToken cancellationToken = default(CancellationToken));

    /// <summary>
    /// Gets the localization for the specified language.
    /// </summary>
    Task<IList<Localization>?> GetLocalizationsAsync(string languageCode, int page, int pageSize, CancellationToken cancellationToken = default(CancellationToken));

    /// <summary>
    /// Gets the localization for the specified language.
    /// </summary>
    Task<Localization?> GetLocalizationAsync(string languageCode, string key, CancellationToken cancellationToken = default(CancellationToken));
}