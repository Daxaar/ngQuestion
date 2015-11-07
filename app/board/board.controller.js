(function() {
  'use strict';

  angular.module("MyApp")
    .controller("BoardController", BoardController);

  BoardController.$inject = ['BoardService','$stateParams'];

  function BoardController(boardService, $stateParams) {

    var vm = this;
    vm.currentQuestion = vm.currentQuestion || new Question();
    vm.boardList = [];
    vm.currentBoard = vm.currentBoard || new Board();
    vm.addQuestion = addQuestion;
    vm.addAnswer = addAnswer;
    vm.removeAnswer = removeAnswer;
    vm.createBoard = createBoard;
    vm.createQuestion = createQuestion;
    vm.save = save;
    vm.list = list;
    vm.isQuestionValid = isQuestionValid;

    activate();

    function activate(){
      var board, id = $stateParams.boardId;
      if(id){
        board = boardService.getById(id);
        if(board && board.length > 0){
          vm.currentBoard = board[0];
        }
      } else {
        vm.boardList = list();
      }
    }

    function addQuestion() {
      vm.currentQuestion.id = vm.currentBoard.questions.length + 1;
      vm.currentBoard.questions.push(vm.currentQuestion);
      vm.currentQuestion = createQuestion();
    }

    function addAnswer ( $keyPress ) {
      if($keyPress && $keyPress.which === 13) {
        $keyPress.stopImmediatePropagation();
      } else {
        return;
      }

      vm.currentQuestion.answers.push({
        id: vm.currentQuestion.answers.length + 1,
        text: vm.currentQuestion.answer.text
      });
      vm.currentQuestion.answer = null;
    }

    function removeAnswer(answer){
      vm.currentQuestion.answers = vm.currentQuestion.answers.filter(function (e) {
        return e.id !== answer.id;
      });
    }

    function createQuestion(){
      return new Question();
    }

    function createBoard(){
      boardService.create(vm.currentBoard);
    }

    function save(){
      debugger;
      boardService.save(vm.currentBoard);
    }

    function list(){
      return boardService.getAll();
    }

    function isQuestionValid(){
      var q = vm.currentQuestion;
      return q.text != null && q.order != null && (q.answers.length > 0 || q.answer != null);
    }
  }

  function Board(){
    this.id = null;
    this.questions = [];
    this.name = null;
  }

  function Question(){
    this.id = null;
    this.text = null;
    this.answers = [];
    this.answer = null;
    this.order = null;
  }

})();
