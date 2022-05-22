using GraphServer.Models;

namespace GraphServer.Queries;

public partial class Query {
    
    public Language? Language(string languageCode) {
        var language = new Language(languageCode);
        language.Id = 2;
        language.Localizations.Add(new Localization(language, "zkouska", "Example"));
        language.Localizations.Add(new Localization(language, "zkouska1", "Example1"));

        return language;
    }
}