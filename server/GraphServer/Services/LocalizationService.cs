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

    public async Task<Localization?> GetLocalizationAsync(string languageCode, string key, CancellationToken cancellationToken)
    {
        var language = await _localizationContext.Languages.FirstOrDefaultAsync(x => x.LanguageCode == languageCode, cancellationToken);
        if (language == null)
        {
            return null;
        }

        return await _localizationContext.Localizations.FirstOrDefaultAsync(x => x.Key == key && x.LanguageId == language.Id, cancellationToken);
    }

    public async Task<IList<Localization>?> GetLocalizationsAsync(string languageCode, CancellationToken cancellationToken)
    {
        var language = await _localizationContext.Languages.FirstOrDefaultAsync(x => x.LanguageCode == languageCode, cancellationToken);
        if (language == null)
        {
            return null;
        }

        return await _localizationContext.Localizations.Where(x => x.LanguageId == language.Id).ToListAsync(cancellationToken);
    }
}