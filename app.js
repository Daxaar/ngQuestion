
(function(){

	var app = angular.module("learnandgame",[]);

	app.controller('MainController',MainController);
	
	function MainController(){
		this.name = 'Darren Lewis';
		
		this.updatedName = '';
		
		this.changeName = function(){
			this.name = this.updatedName;
		}
	};

	//angular.module("learnandgame")
	app.controller('QuestionController', QuestionController);

	function QuestionController(){
		
		var self = this;

		this.questions = [
			{
				text: "Seriously, you support them?",
				show: function(){
					return self.questions[1].value == "Manchester United";
				}
			},
			{
				text: "What is your favourite football team?",
				answers: ["Arsenal","Chelsea","Manchester United"],
				value: "No",
				show: function(){
					return true;
				}
			},			
			{
				text: "What is the day?",
				show: function(){
					return true;
				}

			}

		];
	};

	var Question = function(text, answers,displayRule){
		this.text = text;
		this.answers = answers;
		this.show = displayRule || this.show;
	};

	Question.prototype.show = function(){
		return true;
	};
		
}());