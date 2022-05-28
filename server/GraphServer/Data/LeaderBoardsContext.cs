using GraphServer.Models;
using Microsoft.EntityFrameworkCore;

namespace GraphServer.Data;

public class LeaderBoardsContext : DbContext
{
    #nullable disable
    public LeaderBoardsContext(DbContextOptions<LeaderBoardsContext> options) : base(options) { }
    #nullable enable
    
    public DbSet<Leader> LeaderBoards { get; set; }

    protected override void OnModelCreating(ModelBuilder model)
    {
        model.Entity<Leader>()
            .HasIndex(x => x.Score);
    }
}