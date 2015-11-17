namespace ngQuestion.WebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RemovedQuestionAnswerProperty : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Questions", "Answer");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Questions", "Answer", c => c.String());
        }
    }
}
