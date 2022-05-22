namespace GraphServer.Models;

public class Language
{
    public Int64 Id { get; set; }

    public string LanguageCode { get; set; }

    public IList<Localization> Localizations { get; } = new List<Localization>();
}