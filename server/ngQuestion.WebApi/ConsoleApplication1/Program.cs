using AutoMapper;
using System;
using System.Data.Entity;
using System.Linq;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            var db = new MyContext();
            var db2 = new MyContext();

            var existing = db.Customers.Include(x => x.Cars).First();
            var update = Mapper.Map<Customer>(existing);

            update.Name = "UPDATED CUSTOMER NAME";

            db2.Customers.Attach(update);
            db2.SaveChanges();

            existing = db.Customers.Include(x => x.Cars).First();

            Console.WriteLine(existing.Name);
            Console.Read();
        }
    }

    public class MyContext : DbContext
    {
        public MyContext() : base("DefaultConnection")
        {
            Database.SetInitializer(new DBInitializer());
        }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Car> Cars { get; set; }
    }

    public class DBInitializer : DropCreateDatabaseAlways<MyContext> // DropCreateDatabaseIfModelChanges<MyContext>
    {
        protected override void Seed(MyContext context)
        {
            var c = new Customer()
            {
                Name = "Darren Lewis",
                Cars = new System.Collections.Generic.List<Car>()
                {
                   new Car {Name="Ford Cortina" },
                   new Car {Name= "Ford Anglia" }
                }
            };

            context.Customers.Add(c);
            base.Seed(context);
        }
    }

}
