using GraphServer.Models;
using GraphServer.Services;

namespace GraphServer.Mutations;

[ExtendObjectType(typeof(MutationsType))]
public class LeaderBoardMutations
{

    /// <summary>
    /// Add new leader
    /// </summary>
    public async Task<Leader> AddNewLeader([Service] ILeaderBoardService leaderBoardService, Leader leader)
    {
        return await leaderBoardService.AddToLeaderBoard(leader);
    }
}