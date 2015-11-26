using System.Collections.Generic;

namespace ngQuestion.WebApi.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public int Order { get; set; }
        public List<Answer> Answers { get; set; }
        public int? BoardID { get; set; }

        public override bool Equals(object obj)
        {
            var other = obj as Question;

            if (other == null)
            {
                return false;
            }

            return other != null && 
                    Id.Equals(other.Id) && 
                    Text.Equals(other.Text, System.StringComparison.InvariantCulture);
        }

        public override int GetHashCode()
        {
            int hash = 13;
            hash = (hash * 7) + Id.GetHashCode();
            hash = (hash * 7) + Text.GetHashCode();
            return hash;
        }
    }
}