using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;

namespace GraphServer.Data;

public static class RootContext
{

    /// <summary>
    /// Register the DbContexts on the DI container.
    /// </summary>
    public static void RegisterLocalContexts(this IServiceCollection services)
    {
        services.RegisterMariaDBContext();
    }

    /// <summary>
    /// Migrate all databases
    /// </summary>
    public static void MigrateDatabases(this WebApplication app)
    {
        using (var scope = app.Services.CreateScope()){
            var mariaDb = scope.ServiceProvider.GetRequiredService<LocalizationContext>();
            mariaDb.Database.Migrate();
        }
    }

    /// <summary>
    /// Register the MariaDB context
    /// </summary>
    private static void RegisterMariaDBContext(this IServiceCollection services)
    {
        var mariaDBHost = Environment.GetEnvironmentVariable("MARIADB_HOST");
        var mariaDBPort = Environment.GetEnvironmentVariable("MARIADB_PORT");
        var mariaDBUser = Environment.GetEnvironmentVariable("MARIADB_USER");
        var mariaDBPassword = Environment.GetEnvironmentVariable("MARIADB_PASSWORD");
        var mariaDBDatabase = Environment.GetEnvironmentVariable("MARIADB_DATABASE");
        var mariaDBConnectionString = $"server={mariaDBHost};port={mariaDBPort};database={mariaDBDatabase};user id={mariaDBUser};password={mariaDBPassword};";

        var serverVersion = new MySqlServerVersion(new Version(10, 7, 3));

        services.AddDbContext<LocalizationContext>(options =>
            options.UseMySql(mariaDBConnectionString, serverVersion));
    }
}