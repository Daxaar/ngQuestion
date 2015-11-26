namespace ngQuestion.WebApi.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public int? QuestionID { get; set; }

        public override bool Equals(object obj)
        {
            var other = obj as Answer;

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