// require Word.js to import chosen word and start manipulating it by letter
var Word = require("./word.js");
var word = new Word();
function Letter() {

    this.splitWord = function () {
        var chosenWord = word.selectRandomWord();
        var splitWord = chosenWord.split('');
        console.log(splitWord);
        return splitWord;
    }
    this.toBlanks = function () {
        // trying to use split word variable from previous function
        var arrOfBlanks = splitWord.map(function (letter) {
            letter = "_";
        });
        console.log(arrOfBlanks);
    }
}
var letter = new Letter();
letter.toBlanks();
module.exports = Letter;
