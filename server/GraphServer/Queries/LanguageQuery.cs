using GraphServer.Models;

namespace GraphServer.Queries;

public partial class Query {
    
    public Language? Language(string languageCode) {
        var language = new Language();
        return language;
    }
}