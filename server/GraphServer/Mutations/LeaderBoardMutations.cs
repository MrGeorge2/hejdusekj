using GraphServer.Extensions.Mapper;
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
    public async Task<Leader> AddNewLeader([Service] ILeaderBoardService leaderBoardService, InputLeader inputLeader)
    {
        return await leaderBoardService.AddToLeaderBoard(inputLeader.ToEntity());
    }
}