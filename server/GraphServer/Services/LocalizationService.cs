using GraphServer.Models;

namespace GraphServer.Services;

public class LocalizationService : ILocalizationService
{

    public LocalizationService(){

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