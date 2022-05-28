using System.ComponentModel.DataAnnotations;

namespace GraphServer.Models;


public class Language : BaseModel
{
    private Language()
    {
        // Default constructor for EF
        LanguageCode = String.Empty;
        Localizations = new List<Localization>();
    }

    public Language(string languageCode)
    {
        LanguageCode = languageCode;
        Localizations = new List<Localization>();
    }

    /// <summary>
    /// Language code
    /// </summary>
    [Required(ErrorMessage = "Language code is required")]
    public string LanguageCode { get; private set; }

    public ICollection<Localization> Localizations { get; private set; }
}