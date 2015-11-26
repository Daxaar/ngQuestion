namespace ngQuestion.WebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedBoardID : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Questions", name: "Board_Id", newName: "BoardID");
            RenameIndex(table: "dbo.Questions", name: "IX_Board_Id", newName: "IX_BoardID");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.Questions", name: "IX_BoardID", newName: "IX_Board_Id");
            RenameColumn(table: "dbo.Questions", name: "BoardID", newName: "Board_Id");
        }
    }
}
