var inquirer = require("inquirer");
var Joi = require("joi");
var Letter = require("./letter.js");
var Word = require("./word.js");
// create object from constructor
var letter = new Letter();
var word = new Word();
// keep track of guess
var dashes = 0;
// var letterCount = 0;
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
function playGame(updateWord, blankArray, readyWord, dashes, total, letterCount) {
  console.log("dashes for word: " + dashes);
  console.log("total characters: " + total);
  // Displays word for the user to guess
  console.log(updateWord);
  // if (dashes + letterCount !== total) {
  inquirer.prompt(question).then(function(answer) {
    var input = answer.letterInput;
    // check if the letter is a part of the word
    if (readyWord.indexOf(input) !== -1) {
      console.log("\nCORRECT!");
      console.log("\nlives: " + lives);
      // try to make global variables and set the return equal to them?
      showBlanksToPlayer = letter.changeBlankToLetter(
        input,
        blankArray,
        readyWord
      );
      console.log("test this: " + showBlanksToPlayer);
      letterCount = word.addLetterCount(showBlanksToPlayer, letterCount);
      console.log("test the letter count: " + letterCount);
      console.log("\n---------------------\n");
      return playGame(
        showBlanksToPlayer.join(""),
        showBlanksToPlayer,
        readyWord,
        dashes,
        total,
        letterCount
      );
    } else {
      lives--;
      console.log("Lives: " + lives);
      console.log("WRONG!");
    }
  });
  // }
}
var newWord = function() {
  // Create word for the first time
  var readyWord = letter.splitWord();
  // Create an array of blanks
  var blankArray = letter.toBlanks(readyWord).split("");
  // Create a string of blanks to display to player
  var showBlanksToPlayer = letter.toBlanks(readyWord);
  // total keeps track of characters and dashes keeps track of the dashes
  total = word.total(readyWord, total);
  dashes = word.dashes(blankArray, dashes);
  var letterCount = 0;
  // console.log(showBlanksToPlayer);
  // Loop the game until user wins or looses
  return playGame(showBlanksToPlayer, blankArray, readyWord, dashes, total, letterCount);
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
