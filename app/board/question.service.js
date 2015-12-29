(function() {
  'use strict';

  angular.module('MyApp')
         .service('QuestionService', QuestionService);

  //TODO: Lots of duplication here with board.service
  function QuestionService($http){
    var vm = this;
    var url = "http://localhost:1337/question/";

    return {
      save : save,
      remove : remove
    };

    function save(question){
      if(question.id) {
        return $http.put(url + question.id,question);
      } else {
        return $http.post(url,question);
      }
    }

    function remove(question){
      if(!question || !question.id){
        throw "question not valid for delete";
      }
      return $http.delete(url + question.id);
    }
  }
}());
