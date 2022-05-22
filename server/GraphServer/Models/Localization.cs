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

    public string Key { get; private set; }

    public string Value { get; private set; }

    public Int64 LanguageId { get; private set; }

    public Language Language { get; private set; }
}