namespace GraphServer.Models;


public class Localization : BaseModel
{
    private Localization()
    {
        // Default constructor for EF
        Key = String.Empty;
        Value = String.Empty;
        Language = new Language(String.Empty);
    }

    public Localization(string key, string value, Language language)
    {
        Key = key;
        Value = value;
        Language = language;
    }

    public string Key { get; }

    public string Value { get; }

    public Int64 LanguageId { get; }

    public Language Language { get; }
}