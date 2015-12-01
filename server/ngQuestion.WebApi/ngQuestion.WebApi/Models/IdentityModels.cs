using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Linq;
using System.Data.Entity;

namespace ngQuestion.WebApi.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }
    }

    public class MyInitializer : DropCreateDatabaseAlways<ApplicationDbContext>
    {

    }
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
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
            modelBuilder.Entity<Board>()
                .HasOptional(a => a.Questions)
                .WithOptionalDependent()
                .WillCascadeOnDelete(true);
            modelBuilder.Entity<Question>()
                .HasOptional(a => a.Answers)
                .WithOptionalDependent()
                .WillCascadeOnDelete(true);
        }
    }

    public class BoardMapper
    {
        private readonly ApplicationDbContext db;

        public BoardMapper(ApplicationDbContext context)
        {
            db = context;
        }

        public void Map(Board source)
        {
            var existingBoard = db.Boards.Where(x => x.Id == source.Id)
                             .Include(x => x.Questions.Select(q => q.Answers))
                             .SingleOrDefault();

            foreach (var question in existingBoard.Questions)
            {
                var inputQuestion = existingBoard.Questions.SingleOrDefault(q => q.Id == question.Id);

                if (inputQuestion != null && question.Equals(inputQuestion) == false)
                {
                    //Question exists and has changed
                    db.Entry(question).CurrentValues.SetValues(inputQuestion);
                }
                foreach (var answer in question.Answers)
                {
                    var inputAnswer = inputQuestion.Answers.SingleOrDefault(a => a.Id == answer.Id);
                    if (inputAnswer != null && answer.Equals(inputAnswer) == false)
                    {
                        //Answer exists and has changed
                        db.Entry(answer).CurrentValues.SetValues(inputAnswer);
                    }
                }
            }

            db.Entry(existingBoard).CurrentValues.SetValues(source);

            var newQuestions = source.Questions.Where(q => q.Id == 0);
            var newAnswers = source.Questions.SelectMany(q => q.Answers).Where(a => a.Id == 0);

            db.Questions.AddRange(newQuestions);
            db.Answers.AddRange(newAnswers);
        }
    }
}