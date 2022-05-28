using GraphServer.Models;
using Microsoft.EntityFrameworkCore;

namespace GraphServer.Data;

public class LeaderBoardsContext : DbContext
{

    public LeaderBoardsContext(DbContextOptions<LeaderBoardsContext> options) : base(options) { }

    public DbSet<Leader> LeaderBoards { get; set; }
}

public class LeaderBoardsContextFacotry : IDbContextFactory
{
    public DbContext DbContext { get; }

    public LeaderBoardsContextFacotry(LeaderBoardsContext dbContext)
    {
        DbContext = dbContext;
    }
}