describe('BoardController', function(){

  var boardController;

  beforeEach(module("MyApp"));

  beforeEach(inject(function ($controller) {
    boardController = $controller('BoardController');
  }));

  it('is defined', function() {
    expect(boardController).toBeDefined();
  });

  it('has questions property defined', function () {
    expect(boardController.questions).toBeDefined();
  });

  it('can remove an answer from a questions list of answers',function () {
    boardController.current.answers = [{id:1,text:"an answer"}];
    boardController.removeAnswer({id:1,text:"an answer"});
    expect(boardController.current.answers.length).toBe(0);
  });

  it('can add a question',function () {

    var emptyQuestion = boardController.createQuestion();
    boardController.addQuestion(emptyQuestion);
    expect(boardController.questions.length).toBe(1);
  });

  it('resets the current question property when a new question is added',function () {
    var question = boardController.createQuestion();
    question.text = "A Question";
    boardController.addQuestion(question);
    expect(boardController.current.text).toEqual(null);
  });

});
