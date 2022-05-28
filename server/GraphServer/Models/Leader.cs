using System.ComponentModel.DataAnnotations;

namespace GraphServer.Models;

public class Leader : BaseModel
{
    public Leader(int score, GameType gameType, string nickName)
    {
        Score = score;
        GameType = gameType;
        NickName = nickName;
    }

    /// <summary>
    /// Score
    /// </summary>
    [Required(ErrorMessage = "Score is required")]
    [Range(0, int.MaxValue)]
    public int Score { get; private set; }

    /// <summary>
    /// Game type
    /// </summary>
    [Required(ErrorMessage = "GameType is required")]
    public GameType GameType { get; private set; }

    /// <summary>
    /// Nickname of the player
    /// </summary>
    [Required(ErrorMessage = "NickName is required")]
    [StringLength(20, MinimumLength = 3, ErrorMessage ="NickName has to have 3-20 characters")]
    public string NickName { get; private set; }

}