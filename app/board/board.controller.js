(function() {
  'use strict';

  angular.module("MyApp")
    .controller("BoardController", BoardController);

  BoardController.$inject = ['BoardService'];

  function BoardController(boardService) {

    var vm = this;

    this.title = 'Create a Board';
    this.name = "";
    this.createdBy = "todo: read auth user";

    this.addQuestion = function(){
      this.questions.push(this.current);
      this.current = this.createQuestion();
    };

    this.addAnswer = function(){
      this.current.answers.push({
        id: this.current.answers.length+1,
        text: this.current.answer.text
      });
      this.current.answer = null;
    };
    this.current = this.current || new Question();

    this.removeAnswer = function(answer){
      this.current.answers = this.current.answers.filter(function (e) {
        return e.id !== answer.id;
      });
    };

    this.questions = [];

    this.createQuestion = function(){
      return new Question();
    };

    this.createBoard = function(){
      boardService.create(this.name,this.questions);
    };
  }

  function Question(){
    this.id = null;
    this.text = null;
    this.answers = [];
    this.answer = null;
    this.order = null;
  }

})();
