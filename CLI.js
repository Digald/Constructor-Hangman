var inquirer = require("inquirer");
var Letter = require("./letter.js");
var Word = require("./word.js");

// keep track of guess
var dashes = 0;
var letters = 0;

var question = {
  type: "input",
  name: "letterInput",
  message: "Guess a letter..."
};

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


inquirer.prompt(question).then(function(answer) {
  console.log("it works");
});
