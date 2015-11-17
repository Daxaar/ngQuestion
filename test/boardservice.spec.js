describe('board service',function () {
  var $httpBackend;
  var url = 'http://ngquestion.azurewebsites.net/api/board/';
  var service;

  beforeEach(module("MyApp"));
  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get('$httpBackend');
    service = $injector.get('BoardService');

    $httpBackend.when('GET',url + '1')
      .respond(
          { id:1,name:'test board',
            questions:[
              {
                text:'question text',
                answers:[
                  {id:1,text:'a1'},
                  {id:2,text:'a2'}
                ]
              }
            ]
          });
  }));

  it('is defined in test',function () {
    expect(service).toBeDefined();
  });

  describe('getById',function () {
    it('calls the correct url',function () {
      var boardId = 1;
      $httpBackend.expectGET(url + boardId);
      service.getById(1);
      $httpBackend.flush();
    });

    it('returns a board object',function () {
      var p = service.getById(1);
      p.success(function (data) {
        expect(data).toBeDefined();
        expect(data.id).toBe(1);
      });
    });
  });



});
