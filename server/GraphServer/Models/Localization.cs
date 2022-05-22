using System.Diagnostics.CodeAnalysis;

namespace GraphServer.Models;

public class Localization
{
    public Localization(Language language, string key, string value)
    {
        Language = language;
        Key = key;
        Value = value;
    }

    public int Id { get; set; }

    public string Key { get; }

    public string Value { get; }
    
    public Language Language { get; }
}