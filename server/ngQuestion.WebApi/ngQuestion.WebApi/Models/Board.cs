using System.Collections.Generic;

namespace ngQuestion.WebApi.Models
{
    public class Board
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual List<Question> Questions { get; set; }
    }
}