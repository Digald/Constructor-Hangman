// require Word.js to import chosen word and start manipulating it by letter
var Word = require("./word.js");
var word = new Word();
function Letter() {
  this.splitWord = function() {
    var chosenWord = word.selectRandomWord();
    var splitWord = chosenWord.split("");
    console.log(splitWord);
    return splitWord;
  };
  this.toBlanks = function() {
    // trying to use split word variable from previous function
    var arrOfBlanks = this.splitWord().map(function(val) {
      if (val != " ") {
        return "_";
      } else {
        return "-";
      }
    });
    console.log(arrOfBlanks.join(""));
    return arrOfBlanks;
  };
  this.compareWords = function() {
    if (this.splitWord().indoxOf(answer.letterInput.toLowerCase()) !== -1) {
      return letters++;
    }
  };
}

var letter = new Letter();
letter.toBlanks();
module.exports = Letter;
