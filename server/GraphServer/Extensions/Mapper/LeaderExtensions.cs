using GraphServer.Models;
using GraphServer.Types;

namespace GraphServer.Extensions.Mapper;

public static class LeaderExtensions 
{
    public static Leader ToEntity(this InputLeader leader)
    {
        return new Leader(leader.Score, leader.GameType, leader.NickName);
    }
}