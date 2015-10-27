describe('BoardService', function(){

  var service;

  beforeEach(module('myapp.boards'));

  beforeEach(inject(function (BoardService) {
      service = BoardService;
  }));

  it('has a getAll fn',function () {
    expect(service.getAll).toBeDefined();
  });

  it('has a getById fn',function () {
    expect(service.getById).toBeDefined();
  });
});
