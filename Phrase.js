var Word = require('./Word.js');

function Phrase(str) {
  this.phrase = [];
  this.solved = false;
  this.lost = false;
  this.missed = 10;
  
  let arr = str.split(' ');

  // create array of Word objects
  for (let i=0; i< arr.length; i++) {
    this.phrase.push(new Word(arr[i]));
  }

  // build a string of words with spaces between, then display to console
  this.showPhrase = () => {
    let buildPhrase = '';

    for (let i=0; i<this.phrase.length; i++) {
      buildPhrase += this.phrase[i].showWord() + '  ';
    }
    console.log(`\n${buildPhrase.trim()}\n`);
  }

  this.guessLetter = (l) => {
    let found = false;
    let solvedWords = true;
    for (let i=0; i <this.phrase.length; i++) {
      found = this.phrase[i].checkLetter(l) || found;   // if the letter is found anywhere in the phrase, found = true
      if (this.phrase[i].solved === false) {
        solvedWords = false;    // an unsolved word still exists
      }
    }

    this.solved = solvedWords;
    if (!found) {   // incorrect guess
      this.missed--;
      if (this.missed > 0) {
        console.log(`\n**** Incorrect! You have ${this.missed} guesses left ****`);
      } else {      // correct guess
        this.lost = true;;
      }
    }
  }
}

module.exports = Phrase;