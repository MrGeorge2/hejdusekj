using System.Diagnostics.CodeAnalysis;

namespace GraphServer.Models;

public class Localization
{
    public int Id { get; set; }

    public string Key { get; }

    public string Value { get; }
    
    public Language Language { get; }
}