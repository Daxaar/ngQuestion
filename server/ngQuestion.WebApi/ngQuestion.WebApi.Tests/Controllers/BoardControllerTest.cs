using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ngQuestion.WebApi.Models;
using ngQuestionApi.Controllers;
using ngQuestionApi.Models;

namespace ngQuestion.WebApi.Tests.Controllers
{
    [TestClass]
    public class BoardControllerTest
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        [TestInitialize]
        public void Setup()
        {
            //db.Database.Connection.ConnectionString = "Data Source=(LocalDb)\v11.0;AttachDbFilename=ngQuestion.WebApi-test.mdf;Initial Catalog=aspnet-ngQuestion.WebApi-20151114032402;Integrated Security=True";

            //if (db.Database.Exists()) return;

            //db.Database.Create();
            //db.SaveChanges();
        }

        [TestMethod]
        public void PutBoardUpdatesBoard()
        {
            var controller  = new BoardController();
            var board = new Board()
                {
                    Questions = new List<Question>
                        {
                            new Question()
                                {
                                    Answers = new List<Answer>
                                        {
                                            new Answer
                                                {
                                                    Text = "A1"
                                                },
                                            new Answer
                                                {
                                                    Text = "A2"
                                                }
                                        },
                                    Text = "Question 1",
                                    Order = 1
                                }
                        },
                    Name = "Board Name"
                };

            controller.PostBoard(board);

        }

    }
}
