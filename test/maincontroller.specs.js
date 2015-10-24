describe('MainController', function(){

  var mainController;

  beforeEach(inject(function ($controller) {
    mainController = $controller('MainController');
  }));

  it('is not null', function() {
    expect(mainController).toBeDefined();
  });

  it('has questions property', function () {
    expect(mainController.questions).toBeDefined();
  });
});
