using GraphServer.Models;

namespace GraphServer.Services;

public interface ILeaderBoardService {

    /// <summary>
    /// Get Leaderboard
    /// </summary>
    Task<IList<Leader>> GetLeaderBoard(GameType gameType, int page, int pageSize);

    /// <summary>
    /// Add leader to the leaderboard
    /// </summary>
    Task<Leader> AddToLeaderBoard(Leader leader);
    
    /// <summary>
    /// Get current leader
    /// </summary>
    Task<Leader?> GetCurrentLeader(GameType gameType);
}