(function() {
  'use strict';

  angular.module("MyApp")
    .controller("BoardController", BoardController);

  BoardController.$inject = ['BoardService'];

  function BoardController(boardService) {

    var vm = this;
    vm.current = vm.current || new Question();
    vm.questions = [];

    return {
      title : vm.title,
      name : vm.name,
      current : vm.current,
      questions : vm.questions,
      addQuestion : addQuestion,
      addAnswer : addAnswer,
      removeAnswer: removeAnswer,
      createBoard : createBoard,
      createQuestion : createQuestion,
    };

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
      boardService.save({name:vm.name,questions:vm.questions});
    }

    function list(){
      return boardService.getAll();
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
