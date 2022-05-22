using System.Diagnostics.CodeAnalysis;

namespace GraphServer.Models;

public class Localization
{
    public Localization(Language language, string code, string value)
    {
        Language = language;
        Code = code;
        Value = value;
    }

    public int Id { get; set; }

    public string Code { get; }

    public string Value { get; }
    
    public Language Language { get; }
}