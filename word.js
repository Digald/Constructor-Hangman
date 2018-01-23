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
    return chosenWord;
  };
  this.dashes = function(splitWord){
    for (var i = 0; i < splitWord.length; i++) {
      if (splitWord[i] === "-") {
        return dash++
      }
    }
  }
}

var word = new Word();
module.exports = Word;
