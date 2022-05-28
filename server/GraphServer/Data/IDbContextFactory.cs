using Microsoft.EntityFrameworkCore;

namespace GraphServer.Data;

public interface IDbContextFactory 
{
    DbContext DbContext {get;}
}