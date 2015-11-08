(function() {
  'use strict';

  angular.module('MyApp')
    .service('BoardService', function ($http) {
      var vm = this;

      return {
        getAll : getAll,
        getById : getById,
        save : save
      };

      function save(board){
        var boards = JSON.parse(localStorage.getItem('boards') || '[]');

        var existingBoardId = null;

        for (var i = 0; i < boards.length; i++) {
          if(boards[i].id === board.id){
            existingBoardId = i;
            break;
          }
        }

        if(existingBoardId !== null) {
          boards[existingBoardId] = board;
        } else {
          board.id = boards.length + 1;
          boards.push(board);
        }
        localStorage.setItem('boards',angular.toJson(boards));
      }

      function getAll(){
        return JSON.parse(localStorage.getItem('boards') || '[]');
      }

      function getById(id){
        return getAll().filter(function (question) {
          return question.id == id;
        });
      }
    });

    var sampleQuestions = [{
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
}());
