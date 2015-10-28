describe('BoardController', function(){

  var BoardController;

  beforeEach(module("MyApp"));

  beforeEach(inject(function ($controller) {
    BoardController = $controller('BoardController');
  }));

  it('is defined', function() {
    expect(BoardController).toBeDefined();
  });

  it('has questions property defined', function () {
    expect(BoardController.questions).toBeDefined();
  });

});
