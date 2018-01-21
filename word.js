// Require Letter.js to check if word guess have matched chosen word
var Letter = require("./letter.js");

function Word() {
  this.wordList = [
    "central crocessing unit",
    "motherboard",
    "random access memory",
    "power supply",
    "video card",
    "case",
    "hard drive",
    "solid state drive"
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

module.exports = Word;
