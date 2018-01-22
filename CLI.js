var inquirer = require("inquirer");
var Joi = require("joi");
var Letter = require("./letter.js");
var Word = require("./word.js");
var letter = new Letter();
// keep track of guess
var dashes = 0;
var letters = 0;
var total = 0;
var lives = 9;
// inquirer question
var question = {
  type: "input",
  name: "letterInput",
  message: "Guess a single letter...",
  validate: validateSingleLetter
};
// validate that user only inputs single character
function validateSingleLetter(name) {
  // var regex = /[a-zA-Z]/;
  var chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  return name.length === 1 && chars.indexOf(name.toLowerCase()) !== -1;
}
var playGame = function(updateWord) {
  console.log(updateWord);
  // if (dashes + letters !== total) {
  inquirer.prompt(question).then(function(answer) {
    var input = answer.letterInput;
    // check if the letter is a part of the word
    if (readyWord.indexOf(input) !== -1) {
      console.log("CORRECT!");
      console.log("lives: " + lives);
      // try to make global variables and set the return equal to them?
      showBlanksToPlayer = letter.changeBlankToLetter(
        input,
        blankArray,
        readyWord
      );
      playGame(showBlanksToPlayer);
    } else {
      lives--;
      console.log("Lives: " + lives);
      console.log("WRONG!");
    }
  });
  // }
};
var newWord = function() {
  // Create word for the first time
  var readyWord = letter.splitWord();
  var blankArray = letter.toBlanks(readyWord).split("");
  var showBlanksToPlayer = letter.toBlanks(readyWord);
  console.log(showBlanksToPlayer);
  // Loop the game until user wins or looses
  playGame();
};
newWord();

// function playGame() {
//     if (word still needs to be solved) {
//         inquirer
//     } else {
//         playAgain()
//     }
// }

// function playAgain() {
//     inquirer;
//         if yes {
//             playGame()
//         } else{
//             console.log("bye")
//         }
// }
