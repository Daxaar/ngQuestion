using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using ngQuestion.WebApi.Models;
using System.Web.Http.Cors;

namespace ngQuestion.WebApi.Controllers
{
    [EnableCors("*","*","*")]
    public class BoardController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Board
        public IQueryable<Board> GetBoards()
        {
            return db.Boards.Include(x => x.Questions.Select(q => q.Answers)).ToList().AsQueryable();
        }

        // GET: api/Board/5
        [ResponseType(typeof(Board))]
        public IHttpActionResult GetBoard(int id)
        {
            Board board = db.Boards.Where(x => x.Id == id)
                                   .Include(x => x.Questions.Select(q => q.Answers))
                                   .SingleOrDefault();

            if (board == null)
            {
                return NotFound();
            }

            return Ok(board);
        }

        // PUT: api/Board/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBoard(int id, Board board)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != board.Id)
            {
                return BadRequest();
            }

            var existingBoard = db.Boards.Where(x => x.Id == id)
                                         .Include(x => x.Questions.Select(q => q.Answers))
                                         .SingleOrDefault();

            db.Entry(existingBoard).CurrentValues.SetValues(board);

            //Questions
            var existingInBoth = existingBoard.Questions.Select(x => board.Questions.Any(n => n.Id == x.Id));
            var deleted = existingBoard.Questions.Except(board.Questions);
            var added = board.Questions.Where(q => q.Id == 0);

            existingBoard.Questions.RemoveAll(q => deleted.Any(d => d.Id == q.Id));
            existingBoard.Questions.AddRange(added);
            existingBoard
            foreach (var existingQuestion in existingBoard.Questions)
            {   

            }

            foreach (var question in board.Questions)
            {
                if (question.Id == 0)
                {
                    db.Entry(question).State = EntityState.Added;
                }
                else
                {
                    db.Entry(question).CurrentValues.SetValues(question);
                }

                foreach (var answer in question.Answers)
                {
                    if (answer.Id == 0)
                    {
                        db.Entry(answer).State = EntityState.Added;
                    }
                    else
                    {

                        db.Entry(answer).CurrentValues.SetValues(answer);
                    }
                }
            }
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BoardExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Board
        [ResponseType(typeof(Board))]
        public IHttpActionResult PostBoard(Board board)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Boards.Add(board);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = board.Id }, board);
        }

        // DELETE: api/Board/5
        [ResponseType(typeof(Board))]
        public IHttpActionResult DeleteBoard(int id)
        {
            Board board = db.Boards.Find(id);
            if (board == null)
            {
                return NotFound();
            }

            db.Boards.Remove(board);
            db.SaveChanges();

            return Ok(board);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BoardExists(int id)
        {
            return db.Boards.Count(e => e.Id == id) > 0;
        }
    }
}