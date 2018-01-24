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
  // Find all the dashes in selected word
  this.dashes = function(blankArray, dashes) {
    dashes = 0;
    for (var i = 0; i < blankArray.length; i++) {
      if (blankArray[i] === "-") {
        dashes++;
      }
    }
    return dashes;
  };
  // Finds total characters in chosen word
  this.total = function(readyWord, total) {
    total = 0;
    for (var i = 0; i < readyWord.length; i++) {
      if (readyWord[i] !== "-") {
        total++;
      }
    }
    return total;
  };
  // Finds how many letters have been guessed in chosen word
  this.addLetterCount = function(showBlanksToPlayer, letterCount) {
    letterCount = 0;
    for (var i = 0; i < showBlanksToPlayer.length; i++) {
      if (showBlanksToPlayer[i] !== "_" && showBlanksToPlayer[i] !== "-"){
        letterCount++
      }
    }
    return letterCount;
  };
}

var word = new Word();
module.exports = Word;
