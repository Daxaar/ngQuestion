(function() {
  'use strict';

  angular.module('MyApp')
    .service('BoardIndexer',BoardIndexer);

    function BoardIndexer(){

      return {
          sortById : sortById
      };

      function sortById(questions) {
        if(questions.constructor !== Array){
         throw "questions argument must be of type array";
        }

        questions.forEach(function(element,index,array){
          if(element.id === null){
            element.id = _.max(array,"id").id + 1;
          }
        });

        return _.sortBy(questions,"id");
      }
    }
}());
