

var flashcard = require('flashcard');

var CardFace = function (front, back){
  this.front = true;
  this.back = false;

  this.frontCard = function(){
  flashcard('hola---hello');	// flashcard npm package
  console.log("This is a flashcard: " + flashcard);
    };

  };

var play = new flashcard (true,false);

// module.exports = BasicCard


//////////////////////////////////////////




// var flashcard = require('flashcard');
// flashcard('hola---hello');
// console.log("This is a flashcard: " + flashcard);