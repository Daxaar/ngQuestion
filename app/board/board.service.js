(function() {
  'use strict';

  angular.module('MyApp')
    .service('BoardService', function ($http) {
      var vm = this;

      //var url = "http://ngquestion.azurewebsites.net/api/board/";
      var url = "http://localhost:16005/api/board/";

      return {
        getAll : getAll,
        getById : getById,
        save : save,
        remove : remove
      };

      function remove(board) {
        return $http.delete(url + board.id);
      }
      function save(board){

        if(board.id) {
          $http.put(url + board.id,board);
        } else {
          delete board.id;
          for (var i = 0; i < board.questions.length; i++) {
            delete board.questions[i].id;
            for (var j = 0; j < board.questions[i].answers.length; j++) {
              delete board.questions[i].answers[j].id;
            }
          }
          $http.post(url,board);
        }
      }

      function getAll(){
        return $http.get(url);
      }

      function getById(id){
        return $http.get(url + id);
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
