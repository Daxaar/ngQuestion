describe('MainController', function(){

  beforeEach(module('MyApp'));

  var MainController,
      scope;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    MainController = $controller('MainController',{$scope: scope});
  }));

  it('is not null', function () {
    expect(MainController).not.toBe(null);
  });

  it('has questions property', function () {
    expect(MainController.questions).not.toBe(null);
  });
});
