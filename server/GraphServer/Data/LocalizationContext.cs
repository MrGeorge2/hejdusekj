using GraphServer.Models;
using Microsoft.EntityFrameworkCore;

namespace GraphServer.Data;

public class LocalizationContext : DbContext
{
    public LocalizationContext(DbContextOptions<LocalizationContext> options)
        : base(options)
    {
        
    }

    public DbSet<Localization> Localizations { get; set; }
    public DbSet<Language> Languages { get; set; }

    protected override void OnModelCreating(ModelBuilder model)
    {
        model.Entity<Localization>().ToTable("Localization");
        model.Entity<Language>().ToTable("Language");
    }
}
