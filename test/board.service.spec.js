//TODO: hook up babel for ES6 module support
describe('BoardService', function(){

  var service,
      storage,
      boards = [{id : 1,name : "Test Board",questions : null}];

  beforeEach(module('myapp.boards'));

  beforeEach(inject(function (BoardService) {
      service = BoardService;
      localStorage.clear();
      spyOn(localStorage,'setItem');
      spyOn(localStorage,'getItem').and.returnValue(JSON.stringify(boards));
  }));

  it('has a getAll fn',function () {
    expect(service.getAll).toBeDefined();
  });

  it('has a getById fn',function () {
    expect(service.getById).toBeDefined();
  });

  it('has a save fn',function () {
    expect(service.save).toBeDefined();
  });
  
  it('save: saves the board to localStorage',function () {
    var board = {name:"Test Board Name",questions: null};
    service.save(board);
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('getAll: reads all boards from localStorage',function () {
    var actual = service.getAll();
    expect(actual).toEqual(boards);
  });

  it('getAll: returns an array of boards',function () {
    var actual = service.getAll();
    expect(actual instanceof Array).toBe(true);
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
