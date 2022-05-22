using System.ComponentModel.DataAnnotations;

namespace GraphServer.Models;

public abstract class BaseModel
{
    [Key]
    public Int64 Id { get; }
}
