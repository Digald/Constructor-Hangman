// require Word.js to import chosen word and start manipulating it by letter
var Word = require("./word.js");
var word = new Word();
function Letter() {
    this.splitWord = function() {
        var chosenWord = word.selectRandomWord();
        var splitWord = chosenWord.split('');
        console.log(splitWord);
    }
}
var letter = new Letter();
letter.splitWord();
module.exports = Letter;
