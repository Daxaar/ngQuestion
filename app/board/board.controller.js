(function() {
  'use strict';

  angular.module("MyApp")
    .controller("BoardController", BoardController);

  BoardController.$inject = ['BoardService'];

  function BoardController(boardService) {

    var vm = this;
    vm.current = vm.current || new Question();
    vm.questions = [];
    vm.name = '';
    vm.title = '';
    vm.addQuestion = addQuestion,
    vm.addAnswer = addAnswer,
    vm.removeAnswer = removeAnswer,
    vm.createBoard = createBoard,
    vm.createQuestion = createQuestion,
    vm.save = save
    vm.list = list;

    function addQuestion(){
      vm.questions.push(vm.current);
      vm.current = createQuestion();
    }

    function addAnswer(){
      vm.current.answers.push({
        id: vm.current.answers.length + 1,
        text: vm.current.answer.text
      });
      vm.current.answer = null;
    }

    function removeAnswer(answer){
      vm.current.answers = vm.current.answers.filter(function (e) {
        return e.id !== answer.id;
      });
    }

    function createQuestion(){
      return new Question();
    }

    function createBoard(){
      boardService.create(vm.name,vm.questions);
    }

    function save(){
      //TODO: Validate board
      console.log('saving');
      boardService.save({name:vm.name,questions:vm.questions});
    }

    function list(){
      var boards = boardService.getAll();
      console.log(boards);
      return boards;
    }
  }

  function Question(){
    this.id = null;
    this.text = null;
    this.answers = [];
    this.answer = null;
    this.order = null;
  }

})();
