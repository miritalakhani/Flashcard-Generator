

// Hold the value if user want Basic or Cloz card
var inquirer = require("inquirer");
var fs = require('fs');
var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');
var flashcardType = process.argv[2];



var questions = [
	  {
	    type: 'list',
	    name: 'card',
	    message: 'What do you want to do?',
	    choices: ['Basic','Cloz']
	  }
  ]



inquirer.prompt(questions).then(function (answers) {
  console.log(JSON.stringify(answers, null, '  '));



  // switch(answers.card) {
  switch(answers["card"]) {

    case 'Basic':
        console.log("You choose Basic card");
        var firstPresident = new BasicCard("Who was the first president of the United States?", "mike");
        reviewCard(firstPresident);
        break;
    case 'Cloz':
        console.log("You choose Cloze card");
        var President = new ClozeCard("Mirita was the first president of the United States?", "Mirita");
        reviewClozeCard(President);
        break;
    default:
        console.log("please make correct selection");

	}



});



function reviewCard(card) {
	var questions = [
	  {
	    type: 'input',
	    name: card.front,
	    message: card.front
	  }
	]

	inquirer.prompt(questions).then(function (answerToCard) {
	  console.log(JSON.stringify(answerToCard, null, '  '));
	  console.log(card.back)
	  if(answerToCard == card.back){
	  	console.log("you got it right!")
	  } else {
	  	console.log("you are worng..try again")
	  }
	});
}


function reviewClozeCard(card) {
	var questions = [
	  {
	    type: 'input',
	    name: card.text,
	    message: card.partial
	  }
	]

	inquirer.prompt(questions).then(function (answerToCard) {
	  console.log(JSON.stringify(answerToCard, null, '  '));
	  console.log(card.cloze)
	  if(answerToCard == card.cloze){
	  	console.log("you got it right!")
	  } else {
	  	console.log("you are worng..try again")
	  }
	});
}



