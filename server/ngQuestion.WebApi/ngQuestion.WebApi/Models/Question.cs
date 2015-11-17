using System.Collections.Generic;

namespace ngQuestion.WebApi.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public int Order { get; set; }
        public List<Answer> Answers { get; set; }
    }
}