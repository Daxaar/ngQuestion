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
    expect(boardController.currentBoard).toBeDefined();
  });

  it('can remove an answer from a questions list of answers',function () {
    boardController.currentQuestion.answers = [{id:1,text:"an answer"}];
    boardController.removeAnswer({id:1,text:"an answer"});
    expect(boardController.currentQuestion.answers.length).toBe(0);
  });

  it('can add a question',function () {
    var emptyQuestion = boardController.createQuestion();
    boardController.addQuestion(emptyQuestion);
    expect(boardController.currentBoard.questions.length).toBe(1);
  });

  it('addQuestion: adds the question to the current board',function () {
    boardController.currentBoard = {id:1,questions:[]};
    boardController.addQuestion({id:1,questions:[]});
    expect(boardController.currentBoard.questions.length).toEqual(1);
  });

  it('resets the current question property when a new question is added',function () {
    var question = boardController.createQuestion();
    question.text = "A Question";
    boardController.addQuestion(question);
    expect(boardController.currentQuestion.text).toEqual(null);
  });

  describe('isQuestionValid function',function () {
    it('is defined',function () {
      expect(boardController.isQuestionValid).toBeDefined();
    });

    it('returns true when all question fields are supplied',function () {
      var validQuestion = {id: undefined, text : "q",order : 1,answer : "a",answers : []};
      boardController.currentQuestion = validQuestion;
      expect(boardController.isQuestionValid()).toBe(true);
    });

    it('returns false when id is not null (edit)',function () {
      var question = {id: 1, text : "q",order : 1,answer : "a",answers : []};
      boardController.currentQuestion = question;
      expect(boardController.isQuestionValid()).toBe(false);
    });
  });

  describe('removeQuestion function',function () {
    it('removes the question from the currentBoard',function () {
      boardController.currentQuestion = {id:1};
      boardController.currentBoard.questions = [{id:1}];
      boardController.removeQuestion();
      expect(boardController.currentBoard.questions.length).toEqual(0);
    });
  });
});
