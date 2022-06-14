using System.ComponentModel.DataAnnotations;
using GraphServer.Models;

namespace GraphServer.Types;

public class InputLeader
{
    public InputLeader()
    {
        NickName = String.Empty;
    }

    /// <summary>
    /// Score
    /// </summary>
    [Required(ErrorMessage = "Score is required")]
    [Range(0, int.MaxValue)]
    public int Score { get; set; }

    /// <summary>
    /// Game type
    /// </summary>
    [Required(ErrorMessage = "GameType is required")]
    public GameType GameType { get; set; }

    /// <summary>
    /// Nickname of the player
    /// </summary>
    [Required(ErrorMessage = "NickName is required")]
    [StringLength(20, MinimumLength = 3, ErrorMessage = "NickName has to have 3-20 characters")]
    public string NickName { get; set; }
}