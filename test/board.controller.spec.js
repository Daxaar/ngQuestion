describe('BoardController', function(){

  var BoardController;

  beforeEach(module("MyApp"));
  beforeEach(module('myapp.boards'));

  beforeEach(inject(function ($controller) {
    BoardController = $controller('BoardController');
  }));

  it('is defined', function() {
    expect(BoardController).toBeDefined();
  });

  it('exposes the BoardService (for testing)',function () {
    expect(BoardController.service).toBeDefined();
  });

  it('service has getAll fn',function () {
    expect(BoardController.service.getAll).toBeDefined();
  });

  it('has questions property defined', function () {
    expect(BoardController.questions).toBeDefined();
  });

  it('has the BoardService injected', function () {
    expect(BoardController.service).toBeDefined();
  });
});
