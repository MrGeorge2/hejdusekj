namespace GraphServer.Services;

/// <summary>
/// The root service.
/// </summary>
public static class RootService
{
    /// <summary>
    /// Registers all services.
    /// </summary>
    public static void RegisterLocalServices(this IServiceCollection services)
    {
        services.AddSingleton<ILocalizationService, LocalizationService>();
    }
}