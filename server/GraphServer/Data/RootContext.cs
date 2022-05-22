using Microsoft.EntityFrameworkCore;

namespace GraphServer.Data;

public static class RootContext{

    /// <summary>
    /// Register the DbContexts on the DI container.
    /// </summary>
    public static void RegisterLocalContexts(this IServiceCollection services){
        services.RegisterMariaDBContext();
    }

    /// <summary>
    /// Register the MariaDB context
    /// </summary>
    private static void RegisterMariaDBContext(this IServiceCollection services){
        var mariaDBHost = Environment.GetEnvironmentVariable("MARIADB_HOST");
        var mariaDBPort = Environment.GetEnvironmentVariable("MARIADB_PORT");
        var mariaDBUser = Environment.GetEnvironmentVariable("MARIADB_USER");
        var mariaDBPassword = Environment.GetEnvironmentVariable("MARIADB_PASSWORD");
        var mariaDBDatabase = Environment.GetEnvironmentVariable("MARIADB_DATABASE");
        var mariaDBConnectionString = $"Server={mariaDBHost};Port={mariaDBPort};Database={mariaDBDatabase};User={mariaDBUser};Password={mariaDBPassword};";


        services.AddDbContext<LocalizationContext>(options =>
            options.UseMySQL(mariaDBConnectionString));
    }
}