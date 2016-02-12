(function() {

  'use strict';

  angular.module("MyApp",['ui.router','ngMessages'])
    .config(['$stateProvider',configure])
    .run(['$state', function ($state) {
        $state.transitionTo('list');
      }]);

  function configure($stateProvider) {
    $stateProvider
    .state('create', {
      url: "/boards/create",
      templateUrl: 'board/views/create.html'
    })
    .state('edit', {
      url: "/boards/edit/:boardId",
      templateUrl: 'board/views/create.html'
    })
    .state('view',{
      url: "/boards/view",
      templateUrl: 'board/views/view.html'
    })
    .state('list',{
      url: "/boards",
      templateUrl: 'board/views/list.html'
    })
    .state('myboards',{
      url: "/myboards",
      templateUrl: 'board/views/myboards.html'
    });
  }

}());
