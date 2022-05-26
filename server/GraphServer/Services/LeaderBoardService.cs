using GraphServer.Models;

namespace GraphServer.Services;


public class LeaderBoardService : ILeaderBoardService
{
    public Task<Leader> AddToLeaderBoard(int page, int pageSize)
    {
        throw new NotImplementedException();
    }

    public Task<Leader?> GetCurrentLeader()
    {
        throw new NotImplementedException();
    }

    public Task<List<Leader>> GetLeaderBoard(int page, int pageSize)
    {
        throw new NotImplementedException();
    }
}