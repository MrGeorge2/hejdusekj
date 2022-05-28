using Microsoft.EntityFrameworkCore;

namespace GraphServer.Data;
public class DBContexts
{
    private Dictionary<Type, IDbContextFactory> _dbContextFactories = new Dictionary<Type, IDbContextFactory>();

    public DBContexts(IServiceProvider serviceProvider)
    {
        foreach (var type in typeof(IDbContextFactory).Assembly.GetTypes())
        {
            if (typeof(IDbContextFactory).IsAssignableFrom(type) && !type.IsInterface && !type.IsAbstract)
            {
                var factory = Activator.CreateInstance(type) as IDbContextFactory;

                if (factory is null)
                {
                    throw new Exception($"{type.Name} is not a valid IDbContextFactory");
                }

                _dbContextFactories.Add(type, factory);
            }
        }
    }

    public DbContext GetDbContext<T>() where T : IDbContextFactory
    {
        if (!_dbContextFactories.ContainsKey(typeof(T)))
        {
            throw new Exception($"{typeof(T).Name} is not a valid DbContext");
        }

        return _dbContextFactories[typeof(T)].DbContext;
    }

    public IReadOnlyList<DbContext> GetAllDbContexts()
    {
        var contextList = _dbContextFactories.Values
            .Select(x => x.DbContext)
            .ToList()
            .AsReadOnly();

        return contextList;
    }
}
