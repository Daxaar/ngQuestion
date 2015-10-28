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
      console.log('addQuestion');
      this.questions.push(this.current);
      this.current = new Question();
    };

    this.addAnswer = function(){
      this.current.answers.push({
        id: this.current.answers.length+1,
        text: this.current.answer.text
      });
      this.current.answer = null;
    };
    this.current = this.current || new Question();

    this.questions = [{
      id: 1,
      answer: "",
      order: 1,
      text: "What is your favourite football team?",
      answers: [{
        id: 1,
        text: "Manchester United"
      }, {
        id: 2,
        text: "Arsenal"
      }, {
        id: 3,
        text: "Chelsea"
      }],
      visible: function() {
        return true;
      }
    }, {
      id: 2,
      answer: "",
      order: 2,
      text: "Seriously?  You support them?",
      answers: [{
        id: 1,
        text: "Yes"
      }, {
        id: 2,
        text: "No"
      }],
      visible: function() {
        return self.questions[0].answer == 1;
      }
    }, {
      id:   3,
      answer: "",
      order: 3,
      text: "How long have you supported this team?",
      answers: [{
        id: 1,
        text: "5 Minutes"
      }, {
        id: 2,
        text: "1 Year"
      }, {
        id: 3,
        text: "All My Damn Life!"
      }],
      visible: function() {
        return true;
      }
    }];
  }

  function Question(){
    this.id = null;
    this.text = "";
    this.answers = [];
    this.answer = "";
    this.order = null;
  }

})();
