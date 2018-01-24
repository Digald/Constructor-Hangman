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
  var alreadyGuessedCharacters = [];
  alreadyGuessedCharacters.push(name.toLowerCase());
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
function playGame(
  updateWord,
  blankArray,
  readyWord,
  dashes,
  total,
  letterCount
) {
  // Displays word for the user to guess
  console.log("\n" + updateWord);
  if (dashes + letterCount !== total) {
    inquirer.prompt(question).then(function(answer) {
      var input = answer.letterInput;
      // check if the letter is a part of the word
      if (readyWord.indexOf(input) !== -1) {
        console.log("\nCORRECT!");
        console.log("\nLives Remaining: " + lives);
        // try to make global variables and set the return equal to them?
        showBlanksToPlayer = letter.changeBlankToLetter(
          input,
          blankArray,
          readyWord
        );
        letterCount = word.addLetterCount(showBlanksToPlayer, letterCount);
        console.log("\n-------------Keep it up!-----------------------\n");
        // recursion
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
        console.log("\nWRONG!");
        console.log("\nLives Remaining: " + lives);
        showBlanksToPlayer = letter.changeBlankToLetter(
          input,
          blankArray,
          readyWord
        );
        if (lives > 0) {
          console.log("\n-------------Hint: Computer Parts-----------------------\n");
          // recursion
          return playGame(
            showBlanksToPlayer.join(""),
            showBlanksToPlayer,
            readyWord,
            dashes,
            total,
            letterCount
          );
        } else if (lives <= 0) {
          console.log("\nYOU LOST!\n");
          playAgain();
        }
      }
    });
  } else if (dashes + letterCount === total) {
    console.log("\nYOU WON!\n");
    return playAgain();
  }
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
  // Start the logic now that a word and parameters have been chosen
  return playGame(
    showBlanksToPlayer,
    blankArray,
    readyWord,
    dashes,
    total,
    letterCount
  );
};
newWord();

// Prompt that asks players if they want to continue if they win or lose
function playAgain() {
  inquirer
    .prompt({
      type: "list",
      name: "play",
      message: "Do you want to play again?",
      choices: [
        "Yes holy crap this was much fun I bet it was so easy to code",
        "No this game sucked and the code is sloppy"
      ]
    })
    .then(function(answers) {
      if (
        answers.play ===
        "Yes holy crap this was much fun I bet it was so easy to code"
      ) {
        console.log(
          "-----------------------------NEW GAME-------------------------------"
        );
        return newWord();
      } else {
        return console.log("\nOkay then, Goodbye!");
      }
    });
}