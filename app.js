(function() {

  'use strict';

  //angular.module("MyApp",['ui.router','ngMessages'])
  angular.module("MyApp",['ui.router','ngMessages'])
    .config(['$stateProvider',configure]);

  function configure($stateProvider) {
    $stateProvider
    .state('create', {
      url: "/boards/create",
      templateUrl: 'app/board/views/create.html'
    })
    .state('edit', {
      url: "/boards/create/:boardId",
      templateUrl: 'app/board/views/create.html'
    })
    .state('view',{
      url: "/boards/view",
      templateUrl: 'app/board/views/view.html'
    })
    .state('list',{
      url: "/boards",
      templateUrl: 'app/board/views/list.html'
    });

  }

}());
