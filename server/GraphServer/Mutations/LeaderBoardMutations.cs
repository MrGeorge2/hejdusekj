using GraphServer.Models;
using GraphServer.Services;
using GraphServer.Types;

namespace GraphServer.Mutations;

[ExtendObjectType(typeof(MutationsType))]
public class LeaderBoardMutations
{

    /// <summary>
    /// Add new leader
    /// </summary>
    public async Task<Leader?> AddNewLeader([Service] ILeaderBoardService leaderBoardService, LeaderType leader)
    {
        throw new NotImplementedException();
        /*
        var newLeader = new Leader{

            Score = leader.
        };

        return await leaderBoardService.AddToLeaderBoard(leader);
        */
    }
}