var letter = require('./letter.js')
var wordBank = ['Honda', 'Toyota', 'Lexus', 'Acura', 'BMW', 'Infinity', 'Suburu'];

function Word () {
    this.letterObjectArray = ['A','B','C','D','E','F','G','H','R','S','T','U','V','W','X','Y','Z'];
    this.chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    for (var i = 0; i < this.wordBank.length; i++) {
        var temp = new letter(this.letterObjectArray[i]);
        this.letterObjectArray.push(temp);
    }
    console.log('test letterCheck', this.letterObjectArray[2].letterChecker('a'));
}

Word.prototype.print = function() {
    var printWord = '';
    for (let i = 0; this.letterObjectArray.length; i++) {
        printWord += this.letterObjectArray[i] + '';
    }
}

Word.prototype.userChoice = function(input) {
    for (var i = 0; this.letterObjectArray.length; i++) {
        this.letterObjectArray[i].guess(input);
    }
}

module.exports = Word;

