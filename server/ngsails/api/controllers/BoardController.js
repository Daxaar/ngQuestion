/**
 * BoardController
 *
 * @description :: Server-side logic for managing boards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    answers : function (req,res) {
      'use strict';
      var answers = [];

      Board.find()
           .populate('questions')
           .then(getAllAnswersOnBoard);

      function getAllAnswersOnBoard ( boards ) {
        boards.map(board => {
          if(board.questions){
            board.questions.map(question => {
              answers.push({qid: question.id, answers: question.answers.map(a => a.text)});
            });
          }
          res.json(answers);
        });
      }
    }
};
