using GraphServer.Data;
using GraphServer.Models;
using Microsoft.EntityFrameworkCore;

namespace GraphServer.Services;


public class LeaderBoardService : ILeaderBoardService
{
    private readonly LeaderBoardsContext _leaderBoardContext;
    public LeaderBoardService(LeaderBoardsContext leaderBoardContext)
    {
        _leaderBoardContext = leaderBoardContext;
    }
    
    /// <summary>
    /// Add a leader to the leaderboard
    /// </summary>
    public async Task<Leader> AddToLeaderBoard(Leader leader)
    {
        await _leaderBoardContext.LeaderBoards.AddAsync(leader);
        await _leaderBoardContext.SaveChangesAsync();
        return await Task.FromResult(leader);
    }

    /// <summary>
    /// Get current leader
    /// </summary>
    public async Task<Leader?> GetCurrentLeader(GameType gameType)
    {
        return await _leaderBoardContext.LeaderBoards
            .Where(x => x.GameType == gameType)
            .OrderByDescending(x => x.Score)
            .FirstOrDefaultAsync();
    }

    /// <summary>
    /// Get a Leaderboard
    /// </summary>
    public async Task<IList<Leader>> GetLeaderBoard(GameType gameType, int page, int pageSize)
    {
        return await _leaderBoardContext.LeaderBoards
            .Where(x => x.GameType == gameType)
            .OrderByDescending(x => x.Score)
            .Skip(page * pageSize)
            .Take(pageSize)
            .ToListAsync();
    }
}