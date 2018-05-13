var Letter = require('./letter.js');
var inquirer = require('inquirer');
var Word = require('./word.js')
//console.log(Letter);


var wordBank = ['Honda', 'Toyota', 'Lexus', 'Acura', 'BMW', 'Infinity', 'Suburu'];

//this.chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
//You need an array for guessed correct and incorrect letters
var correctLetters = [];
var incorrectLetter = [];


//for underscores to appear will be used in a function
var underScore = "_"


// Guesses user has in the game
var guessesLeft = 5;

//randomly selects a word and uses a constructor to store it
// function playGame() {
// var wordChoice = new Word(chosenWord);
// Word.underScoreMake();
// }

//This is to grab a random word
// function grabRandomWord() {
//     var rand = wordBank[Math.floor(Math.random() * wordBank.length)];
//     var randomSelection = wordBank[rand];
//     if(chosenWord.indexOf(randomWord) === -1) {
//       return randomWord;
//     } else {
//     grabRandomWord()
//     gameGuessing();
//     playGame();
//     }
//   }

// function gameGuessing (){
//   if (guessesLeft = 5) {
//         inquirer.prompt([
//             {
//                 type: "input",
//                message: 'Guess a letter:',
//               name: "guess"
//            }
//     ]).then(function(answer){
//            letterValidate = this.letterChecker(guess);
//         if (guessesLeft === 0) {
               //console.log('');
//                 console.log("Your guesses were incorrect" + answer.guessedLetter + "Try Again!");
//                 guessesLeft--;
//             } else {
//         console.log(this.letterChecker);
            
//             if (guesses > 0 && correct) {
//                 letterValidate = this.letterChecker(guess);
//                //console.log('');
//                 console.log("Your guess is correct"+ answer.guessesLetter + "Good Job!");
//                 inquire();
//             } else {
//                console.log("GuessesLeft" + guessesLeft);      
               
//         } console.log(answers);
//          inquirer();
//     }
    
//  });
