// describe('QuestionSorter',function () {
//
//   var sorter;
//
//   beforeEach(module('MyApp'));
//
//   beforeEach(inject(function (QuestionSorter) {
//     sorter = QuestionSorter;
//   }));
//
//   it('is defined',function () {
//     expect(sorter).toBeDefined();
//   });
//
//   describe('sortById function',function () {
//     it('is defined',function () {
//       expect(sorter.sortById).toBeDefined();
//     });
//
//     it('sorts questions by id',function () {
//
//       var ids = "", questions = _.shuffle( createQuestions(5) );
//
//       questions = sorter.sortById(questions);
//       _.each(questions,function(q){ ids+= q.id; });
//
//       expect(ids).toEqual("12345");
//     });
//
//     it('replaces null ids with sequential id',function () {
//       var ids = "", questions = _.shuffle( createQuestions(5) );
//       questions[2].id = null;
//       questions = sorter.sortById(questions);
//       _.each(questions,function(q){ ids+= q.id; });
//       expect(ids).toEqual("12345");
//     });
//   });
//
//   function createQuestions(number){
//     var questions = [];
//     var question;
//     for (var i = 1; i < number; i++) {
//       question = {id:i,text:"question " + i,answers: []};
//       for (var j = 0; j < 5; j++) {
//         question.answers.push({id:j,text:"answer " + j});
//       }
//       questions.push(question);
//     }
//     return questions;
//   }
//
// });
