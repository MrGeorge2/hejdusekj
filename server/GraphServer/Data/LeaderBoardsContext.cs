using GraphServer.Models;
using Microsoft.EntityFrameworkCore;

namespace GraphServer.Data;

public class LeaderBoardsContext : DbContext
{
    public LeaderBoardsContext(DbContextOptions<LeaderBoardsContext> options) : base(options) { }

    public DbSet<Leader> LeaderBoards { get; set; }

    protected override void OnModelCreating(ModelBuilder model)
    {
        model.Entity<Leader>()
            .HasIndex(x => x.Score);
    }
}