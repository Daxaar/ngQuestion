using System.Data.Entity;
using ngQuestion.WebApi.Models;

namespace ngQuestionApi.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext()
            : base("DefaultConnection")
        {
            Database.SetInitializer(new MyInitializer());
        }
        
        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        public DbSet<Board> Boards { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Answer> Answers { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Board>()
            //            .HasRequired(q => q.Questions)
            //            .
            //            //.HasOptional(a => a.Questions)
            //            //.WithOptionalDependent()
            //            .WillCascadeOnDelete(true);
            //modelBuilder.Entity<Question>()
            //            .HasOptional(a => a.Answers)
            //            .WithOptionalDependent()
            //            .WillCascadeOnDelete(true);
        }
    }
}