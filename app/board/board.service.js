(function() {
  'use strict';

  angular.module('myapp.boards',[])
    .service('BoardService', function ($http) {
      var vm = this;

      vm.getAll = function(){
        return sampleQuestions;
      };

      vm.getById = function(id){
        var result = sampleQuestions.filter(function (question) {
          return question.id === id;
        });

        if(result.length > 1){
          throw "Duplicate question id exists";
        }
        return result[0];
      };
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
