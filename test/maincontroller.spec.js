describe('MainController', function(){

  var mainController;

  beforeEach(module("MyApp"));
  beforeEach(module('myapp.boards'));

  beforeEach(inject(function ($controller) {
    mainController = $controller('MainController');
  }));

  it('is defined', function() {
    expect(mainController).toBeDefined();
  });

  it('exposes the BoardService (for testing)',function () {
    expect(mainController.service).toBeDefined();
  });

  it('service has getAll fn',function () {
    expect(mainController.service.getAll).toBeDefined();
  });

  it('has questions property defined', function () {
    expect(mainController.questions).toBeDefined();
  });

  it('has the BoardService injected', function () {
    expect(mainController.service).toBeDefined();
  });
});
