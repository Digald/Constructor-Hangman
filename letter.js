// require Word.js to import chosen word and start manipulating it by letter
var Word = require("./word.js");
var word = new Word();
function Letter() {
  this.splitWord = function() {
    var chosenWord = word.selectRandomWord();
    var splitWord = chosenWord.split("");
    return splitWord;
  };
  this.toBlanks = function(splitWord) {
    // trying to use split word variable from previous function
    var arrOfBlanks = splitWord.map(function(val) {
      if (val != " ") {
        return "_";
      } else {
        return "-";
      }
    });
    return arrOfBlanks.join("");
  };
  this.changeBlankToLetter = function(letter, blankArr, wordArr) {
    for (var i; i < blankArr.length; i++) {
      if (letter === wordArr[i]) {
        blankArr[i] = letter;
      }
    }
    return blankArr;
  };
}
// export Letter constructor
module.exports = Letter;
