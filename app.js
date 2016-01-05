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
      templateUrl: 'app/board/views/create.html'
    })
    .state('edit', {
      url: "/boards/edit/:boardId",
      templateUrl: 'app/board/views/create.html'
    })
    .state('view',{
      url: "/boards/view",
      templateUrl: 'app/board/views/view.html'
    })
    .state('list',{
      url: "/boards",
      templateUrl: 'app/board/views/list.html'
    })
    .state('myboards',{
      url: "/myboards",
      templateUrl: 'app/board/views/myboards.html'
    });
  }

}());
