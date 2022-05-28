using GraphServer.Data;
using GraphServer.Mutations;
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
    .AddQueryType<QueryType>()
        .AddTypeExtension<LanguageQuery>()
        .AddTypeExtension<LeaderBoardsQuery>()
/*
    .AddMutationType<MutationsType>()
        .AddTypeExtension<LeaderBoardMutations>()
        */
    .AddProjections();

var app = builder.Build();

app.MigrateDatabases();

app.MapGraphQL();
app.Run();
