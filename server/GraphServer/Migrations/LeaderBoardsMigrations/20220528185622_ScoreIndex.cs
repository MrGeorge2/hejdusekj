using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GraphServer.Migrations.LeaderBoardsMigrations
{
    public partial class ScoreIndex : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_LeaderBoards_Score",
                table: "LeaderBoards",
                column: "Score");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_LeaderBoards_Score",
                table: "LeaderBoards");
        }
    }
}
