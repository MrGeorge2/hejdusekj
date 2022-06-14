namespace GraphServer.Seeder;

public static class RootSeeder
{
    /// <summary>
    /// Register Seeders in the IoC container.
    /// </summary>
    /// <param name="services"></param>
    public static void RegisterSeeders(this IServiceCollection services)
    {
        services.AddTransient<ILocalizationSeeder, LocalizationSeeder>();

        // Seeder registration have to be done after all other services are registered
        services.AddTransient<ISeeder, Seeder>();
    }

    /// <summary>
    /// Migrate all databases
    /// </summary>
    public static void SeedDatabase(this WebApplication app)
    {
        using (var scope = app.Services.CreateScope())
        {
            var seeder = scope.ServiceProvider.GetRequiredService<ISeeder>();
            seeder.SeedAsync().Wait();
        }
    }
}