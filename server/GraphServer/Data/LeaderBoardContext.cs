using Microsoft.EntityFrameworkCore;

namespace GraphServer.Data;

public class LeaderBoardContext: DbContext{

    public LeaderBoardContext(DbContextOptions<LeaderBoardContext> options): base(options) {}

    
}