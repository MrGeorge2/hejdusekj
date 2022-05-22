namespace GraphServer.Models;

public class Language
{
    public Language(string languageCode)
    {
        LanguageCode = languageCode;
    }

    public Int64 Id { get; set; }

    public string LanguageCode { get; }

    public IList<Localization> Localizations { get; } = new List<Localization>();
}