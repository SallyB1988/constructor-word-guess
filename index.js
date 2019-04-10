var inquirer = require('inquirer');
var Phrase = require('./Phrase');

const phraseBank = [
  "A stitch in time saves nine",
  "one fry short of a happy meal",
  "life is like a box of chocolates",
];

let counter = 0;
let randomPhrase = phraseBank[counter].toUpperCase();
let puzzle = new Phrase(randomPhrase);

// Main loop - asks user for letters.
const loopPrompt = () => {
  
  inquirer.prompt([
    {
      type: 'string',
      name: 'letter',
      message: 'Guess a letter: ',
    },
  ])
  .then(resp => {
    if (resp.letter === '0') {
      return;
    } else {
      puzzle.guessLetter(resp.letter);
      puzzle.showPhrase();
      if (puzzle.solved) {
        console.log("\n\nCongratulations! You Won!");
        playAgain();
      } else if (puzzle.lost) {
        console.log("\n\nYou lost.");
        console.log(`The phrase was: ${randomPhrase}`);
        playAgain();
      } else {
        loopPrompt();
      }
    }
  });
}

// After puzzle is solved or user loses, ask to play again
const playAgain = () => {
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Would you like to play another round? ',
      default: true,
    },
  ])
  .then(resp => {
    if (resp.confirm) {
      counter++;
      if (counter < phraseBank.length) {
        randomPhrase = phraseBank[counter].toUpperCase();
        puzzle = new Phrase(randomPhrase);
        puzzle.showPhrase();
        loopPrompt();
      } else {
        console.log("All puzzles have been solved.")
        return;
      }
    }
  })
}
  
  console.log('Guess letters to discover the hidden phrase.');
  console.log('If you guess 10 incorrect letters, you lose.\n');
  puzzle.showPhrase();
  loopPrompt();

