namespace ngQuestion.WebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedQuestionID : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Answers", name: "Question_Id", newName: "QuestionID");
            RenameIndex(table: "dbo.Answers", name: "IX_Question_Id", newName: "IX_QuestionID");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.Answers", name: "IX_QuestionID", newName: "IX_Question_Id");
            RenameColumn(table: "dbo.Answers", name: "QuestionID", newName: "Question_Id");
        }
    }
}
