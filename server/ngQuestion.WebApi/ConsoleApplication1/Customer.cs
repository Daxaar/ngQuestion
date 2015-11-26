using System.Collections.Generic;

namespace ConsoleApplication1
{
    public class Customer
    {
        public Customer()
        {
            Cars = new List<Car>();
        }

        public int Id { get; set; }
        public List<Car> Cars { get; set; }
        public string Name { get;set; }
    }
}