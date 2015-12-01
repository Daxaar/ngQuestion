using System.Data.Entity;

namespace ngQuestionApi.Models
{
    public class MyInitializer : DropCreateDatabaseIfModelChanges<ApplicationDbContext>
    {

    }
}