var inquirer = require('inquirer');
var Phrase = require('./Phrase');



const randomPhrase = "Hot dogs are good".toUpperCase();
let puzzle = new Phrase(randomPhrase);

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
      } else if (puzzle.lost) {
        console.log("\n\nYou lost.");
        console.log(`The phrase was: ${randomPhrase}`);
      } else {
        loopPrompt();
      }
    }
  });
}

console.log('Guess letters to discover the hidden phrase.');
console.log('If you guess 10 incorrect letters, you lose.\n\n');
console.log(randomPhrase);
puzzle.showPhrase();
loopPrompt();