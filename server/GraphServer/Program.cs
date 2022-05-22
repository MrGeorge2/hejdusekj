using GraphServer.Data;
using GraphServer.Queries;
using GraphServer.Services;

var builder = WebApplication.CreateBuilder(args);

var services = builder.Services;

// Register graphql
services
    .AddGraphQLServer()
    .AddQueryType<Query>();

// Register database
services
    .RegisterLocalContexts();

// Register local services
services.
    RegisterLocalServices();

var app = builder.Build();

app.MapGraphQL();
app.Run();
