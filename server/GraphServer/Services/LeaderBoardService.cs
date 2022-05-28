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
    
    public async Task<Leader?> AddToLeaderBoard(Leader leader)
    {
        await _leaderBoardContext.LeaderBoards.AddAsync(leader);
        await _leaderBoardContext.SaveChangesAsync();
        return await Task.FromResult(leader);
    }

    public async Task<Leader?> GetCurrentLeader()
    {
        return await _leaderBoardContext.LeaderBoards
            .OrderByDescending(x => x.Score)
            .FirstOrDefaultAsync();
    }

    public async Task<List<Leader>> GetLeaderBoard(int page, int pageSize)
    {
        return await _leaderBoardContext.LeaderBoards
            .OrderByDescending(x => x.Score)
            .Skip(page * pageSize)
            .Take(pageSize)
            .ToListAsync();
    }
}