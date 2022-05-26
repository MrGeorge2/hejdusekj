using System.ComponentModel.DataAnnotations;

namespace GraphServer.Models;

public class Leader : BaseModel
{
    public Leader(UInt32 score, GameType gameType, string nickName)
    {
        Score = score;
        GameType = gameType;
        NickName = nickName;
    }

    [Required]
    public UInt32 Score { get; private set; }

    [Required]
    public GameType GameType { get; private set; }

    [Required]
    [StringLength(20, MinimumLength = 3, ErrorMessage ="NickName has to have 3-20 characters")]
    public string NickName { get; private set; }

}