using GraphServer.Data;
using GraphServer.Queries;
using GraphServer.Services;

var builder = WebApplication.CreateBuilder(args);

var services = builder.Services;

// Register database
services
    .RegisterLocalContexts();

// Register local services
services.
    RegisterLocalServices();

// Register graphql
services
    .AddGraphQLServer()
    .AddQueryType<Query>();

var app = builder.Build();

app.MigrateDatabases();

app.MapGraphQL();
app.Run();
