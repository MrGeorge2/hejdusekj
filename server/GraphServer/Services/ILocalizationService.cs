using GraphServer.Models;

namespace GraphServer.Services;

public interface ILocalizationService
{
    /// <summary>
    /// Gets the localization for the specified language.
    /// </summary>
    Task<IList<Localization>> GetLocalizationsAsync(string languageCode, CancellationToken cancellationToken);

    /// <summary>
    /// Gets the localization for the specified language.
    /// </summary>
    Task<Localization> GetLocalizationAsync(string languageCode, string key, CancellationToken cancellationToken);
}