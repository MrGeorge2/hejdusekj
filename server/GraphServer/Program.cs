using GraphServer.Queries;
using GraphServer.Services;

var builder = WebApplication.CreateBuilder(args);

var services = builder.Services;

// Register graphql
services
    .AddGraphQLServer()
    .AddQueryType<Query>();

// Register local services
services.
    RegisterLocalServices();


// Register database


var app = builder.Build();
app.MapGraphQL();
app.Run();
