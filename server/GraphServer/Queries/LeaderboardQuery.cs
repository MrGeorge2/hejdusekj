using GraphServer.Models;
using GraphServer.Services;

namespace GraphServer.Queries;

public partial class Query
{
    public async Task<Leader?> GetCurrentLeader([Service] ILeaderBoardService leaderBoardService, GameType gameType){
        return await leaderBoardService.GetCurrentLeader(gameType);
    }

    public async Task<IList<Leader>> GetLeaderBoard([Service] ILeaderBoardService leaderBoardService, GameType gameType, int page, int pageSize){
        return await leaderBoardService.GetLeaderBoard(gameType, page, pageSize);
    }
}