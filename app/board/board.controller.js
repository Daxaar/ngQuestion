(function() {
  'use strict';

  angular.module("MyApp")
    .controller("BoardController", BoardController);

  BoardController.$inject = ['BoardService','QuestionService','$stateParams'];

  function BoardController(boardService, questionService, $stateParams) {

    var vm = this;
    vm.currentQuestion = vm.currentQuestion || new Question();
    vm.boardList = [];
    vm.currentBoard = vm.currentBoard || new Board();
    vm.addQuestion = addQuestion;
    vm.addAnswer = addAnswer;
    vm.removeAnswer = removeAnswer;
    vm.createQuestion = createQuestion;
    vm.save = save;
    vm.list = list;
    vm.isQuestionValid = isQuestionValid;
    vm.resetQuestion = resetQuestion;
    vm.isEditMode = isEditMode;
    vm.editQuestion = editQuestion;
    vm.updateQuestion = updateQuestion;
    vm.remove = remove;
    vm.removeQuestion = removeQuestion;

    activate();

    function activate(){
      var board, id = $stateParams.boardId;
      if(id) {
        boardService.getById(id)
          .success( function( data ){
            if(data){
              vm.currentBoard = data;
            }
          });
      } else {
        //TODO: Fix this as it's triggered when we hit the create URL
        vm.boardList = list();
      }
    }

    function remove(board){
        boardService.remove(board).then(success,fail);

        function success(data) {
          vm.boardList = _.without(vm.boardList,board);
        }

        function fail(data){
          alert(data.status + ' : ' + data.statusText);
        }
    }

    function updateQuestion(){

        for (var i = 0; i < vm.currentBoard.questions.length; i++) {

          if(vm.currentBoard.questions[i].id == vm.currentQuestion.id){
            vm.currentBoard.questions[i] = vm.currentQuestion;
          }
        }
        vm.resetQuestion();
    }

    function removeQuestion(){

      for (var i = 0; i < vm.currentBoard.questions.length; i++) {
        if(vm.currentBoard.questions[i].id === vm.currentQuestion.id){
          vm.currentBoard.questions.splice(i,1);
        }
      }
      questionService.remove(vm.currentQuestion);
      resetQuestion();
    }

    function editQuestion(question){
      vm.currentQuestion = _.find(vm.currentBoard.questions,function(q){
        return q.id === question.id;
      });
    }

    function isEditMode(){
      return vm.currentQuestion.id !== undefined;
    }

    function resetQuestion(){
      vm.currentQuestion = new Question();
    }

    function addQuestion() {
      //vm.currentQuestion.id = vm.currentBoard.questions.length + 1;
      vm.currentBoard.questions.push(vm.currentQuestion);
      vm.currentQuestion = createQuestion();
    }

    function addAnswer ( $event ) {
      if($event instanceof KeyboardEvent) {
        if($event.which !== 13) {
          return;
        }
        $event.stopImmediatePropagation();
      }

      vm.currentQuestion.answers.push({
        text: vm.currentQuestion.answer.text
      });
      vm.currentQuestion.answer = null;
    }

    function removeAnswer(answer){
      vm.currentQuestion.answers = vm.currentQuestion.answers.filter(function (a) {
        return a.text !== answer.text;
      });
    }

    function createQuestion(){
      return new Question();
    }

    function save(){
      boardService.save(vm.currentBoard);
    }

    function list(){
      boardService.getAll()
        .success(function (data) {
          vm.boardList = data;
        });
    }

    function isQuestionValid(){
      var q = vm.currentQuestion;
      return q !== null && q.id === undefined && q.text !== null && q.order !== null && (q.answers.length > 0 || q.answer !== null);
    }
  }

  function Board(){
    this.questions = [];
    this.name = null;
  }

  function Question(){
    this.text = null;
    this.answers = [];
    this.answer = null;
    this.order = null;
  }

})();
