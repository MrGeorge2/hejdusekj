using GraphServer.Models;

namespace GraphServer.Types;

public class LeaderType: ObjectType<Leader>{
    protected override void Configure(IObjectTypeDescriptor<Leader> descriptor)
    {
        descriptor
            .Field(p => p.NickName)
            .Description("Players nick name");

        descriptor
            .Field(p => p.Score)
            .Description("Score");
        
        descriptor
            .Field(p => p.GameType)
            .Description("Game type");
    
    }
}