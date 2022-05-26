using GraphServer.Models;

namespace GraphServer.Services;

public interface ILeaderBoardService {
    Task<List<Leader>> GetLeaderBoard(int page, int pageSize);

    Task<Leader?> AddToLeaderBoard(Leader leader);

    Task<Leader?> GetCurrentLeader();
}