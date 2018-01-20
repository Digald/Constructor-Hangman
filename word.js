// Require Letter.js to check if word guess have matched chosen word
var Letter = require("./letter.js");

function Word() {
  this.wordList = [
    "Central Processing Unit",
    "Motherboard",
    "Random Access Memory",
    "Power Supply",
    "Video Card",
    "Case",
    "Hard Drive",
    "Solid State Drive"
  ];
  this.selectRandomWord = function() {
    var chosenWord = this.wordList[
      Math.floor(Math.random() * this.wordList.length)
    ];
    console.log(chosenWord);
    return chosenWord;
  };
  this.compareWords = function() {};
}

var word = new Word();
word.selectRandomWord();

module.exports = Word;
