using Microsoft.EntityFrameworkCore;

namespace GraphServer.Data;

public static class RootContext{
    public static void RegisterLocalContexts(this IServiceCollection services){
        services.AddDbContext<LocalizationContext>(options =>
            options.UseMySQL("Data Source=localization.db"));
    }
}