var inquirer = require("inquirer");
var Joi = require("joi");
var Letter = require("./letter.js");
var Word = require("./word.js");
var letter = new Letter();
// keep track of guess
var dashes = 0;
var letters = 0;
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
var playGame = function() {
  // if (dashes + letters !== total) {
  inquirer.prompt(question).then(function(answer) {
    console.log("You guessed: " + answer.letterInput);
    letter.compareWords();
  });
  // }
};

playGame();

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
