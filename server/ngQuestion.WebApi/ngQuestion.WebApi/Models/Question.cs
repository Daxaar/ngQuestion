using System.Collections.Generic;

namespace ngQuestion.WebApi.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public int Order { get; set; }
        public string Answer { get; set; }
        public List<string> Answers { get; set; }
    }
}