(function() {
  'use strict';

  angular.module('MyApp')
    .service('BoardService', function ($http) {
      var vm = this;
      var url = "http://localhost:1337/board/";

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
          return $http.put(url + board.id,board);
        } else {
          console.log(board);
          return $http.post(url,board);
        }
      }

      function getAll(){
        return $http.get(url + "populate=name");
      }

      function getById(id){
        return $http.get(url + id);
      }
    });
}());
