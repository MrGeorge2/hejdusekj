using System.ComponentModel.DataAnnotations;

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

    /// <summary>
    /// Key
    /// </summary>
    [Required(ErrorMessage = "Key is required")]
    public string Key { get; private set; }

    /// <summary>
    /// Value
    /// </summary>
    [Required(ErrorMessage = "Value is required")]
    public string Value { get; private set; }

    /// <summary>
    /// Language
    /// </summary> 
    public Int64 LanguageId { get; private set; }

    /// <summary>
    /// Language
    /// </summary>
    public Language Language { get; private set; }
}