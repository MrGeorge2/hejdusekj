using GraphServer.Data;
using GraphServer.Models;

namespace GraphServer.Services;

public class LocalizationService : ILocalizationService
{
    private readonly LocalizationContext _localizationContext;
    public LocalizationService(
        LocalizationContext localizationContext)
    {
        _localizationContext = localizationContext;
    }

    public async Task<Localization> GetLocalizationAsync(string languageCode, string key, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public async Task<IList<Localization>> GetLocalizationsAsync(string languageCode, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}