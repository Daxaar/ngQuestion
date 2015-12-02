using System;
using System.Data.Entity;
using System.Linq;
using ngQuestion.WebApi.Models;
using System.Collections.Generic;

namespace ngQuestionApi.Models
{
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

            if (existingBoard == null)
                throw new InvalidOperationException(string.Format("Unable to find board with id {0} in database",source.Id));

            var questionsToBeDeleted = new List<Question>();
            var answersToBeDeleted = new List<Answer>();

            foreach (var question in existingBoard.Questions)
            {
                var sourceQuestion = source.Questions.SingleOrDefault(q => q.Id == question.Id);

                if (sourceQuestion == null)
                {
                    questionsToBeDeleted.Add(question);
                }
                else if (question.Equals(sourceQuestion) == false)
                {
                    //Question exists and has changed
                    db.Entry(question).CurrentValues.SetValues(sourceQuestion);
                }


                foreach (var answer in question.Answers)
                {
                    var sourceAnswer = sourceQuestion.Answers.SingleOrDefault(a => a.Id == answer.Id);

                    if(sourceAnswer == null)
                    {
                        answersToBeDeleted.Add(answer);
                    }
                    else if (sourceAnswer != null && answer.Equals(sourceAnswer) == false)
                    {
                        //Answer exists and has changed
                        db.Entry(answer).CurrentValues.SetValues(sourceAnswer);
                    }
                }
            }

            db.Entry(existingBoard).CurrentValues.SetValues(source);


            var newQuestions = source.Questions.Where(q => q.Id == 0);
            var newAnswers = source.Questions.SelectMany(q => q.Answers).Where(a => a.Id == 0);

            db.Questions.AddRange(newQuestions);
            db.Answers.AddRange(newAnswers);
            db.Questions.RemoveRange(questionsToBeDeleted);
            db.Answers.RemoveRange(answersToBeDeleted);
        }
    }
}