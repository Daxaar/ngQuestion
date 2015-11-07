//TODO: hook up babel for ES6 module support
describe('BoardService', function(){

  var service,
      storage,
      boards = [{id : 1,name : "Test Board",questions : null}];

  beforeEach(module('MyApp'));

  beforeEach(inject(function (BoardService) {
      service = BoardService;
      localStorage.clear();
  }));

  it('has a getAll fn',function () {
    expect(service.getAll).toBeDefined();
  });

  it('has a getById fn',function () {
    expect(service.getById).toBeDefined();
  });

  describe('save function',function () {
    it('is defined',function () {
      expect(service.save).toBeDefined();
    });

    it('saves the board to localStorage',function () {
      spyOn(localStorage,'setItem');
      service.save({name:"Test Board Name",questions: null});
      expect(localStorage.setItem).toHaveBeenCalled();
    });

    it('updates a board when it already has an id',function () {
      var board = {name:"test board",id:1234567890};
      service.save(board);
      expect(service.getAll().length).toBe(1);
      service.save(board);
      expect(service.getAll().length).toBe(1);
    });

    it("saves the board as a new record when it doesn't already exist in store",function () {
      var board = {name:"test board",id:1234567890};
      expect(service.getAll().length).toBe(0);
      service.save(board);
      expect(service.getAll().length).toBe(1);
    });
  });

  it('getAll: reads all boards from localStorage',function () {
    spyOn(localStorage,'getItem').and.returnValue(JSON.stringify(boards));
    var actual = service.getAll();
    expect(actual).toEqual(boards);
  });

  it('getAll: returns an array of boards',function () {
    spyOn(localStorage,'getItem').and.returnValue(JSON.stringify(boards));
    var actual = service.getAll();
    expect(actual instanceof Array).toBe(true);
  });

  it('sets the id of a new board based on the length of the array',function () {
    var board = {name:"test board"};
    service.save(board);
    var boards = service.getAll();
    expect(boards.length).toBe(1);
    expect(boards[boards.length-1].id).toBe(1);
  });



  function createQuestions(number){
    var questions = [];
    var question;
    for (var i = 0; i < number; i++) {
      question = {id:i,text:"question " + i,answers: []};
      for (var j = 0; j < 5; j++) {
        question.answers.push({id:j,text:"answer " + j});
      }
      questions.push(question);
    }
    return questions;
  }
});
