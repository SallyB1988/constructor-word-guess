var Letter = require('./Letter.js');

function Word(str) {

  this.solved = false;
  this.word = [];
  for (let i=0; i<str.length; i++) {
    this.word.push(new Letter(str[i]));
  }

  // Creates a string representing the word. If letters have been guessed, they
  // are displayed, otherwise they are represented by an underscore.
  this.showWord = () => {
    let wordStr = '';
    for (let i=0; i<this.word.length; i++) {
      wordStr += this.word[i];
    }
    return wordStr;
  }

  // checks all letters in the word to see if any equal the guessed letter (l)
  // 'noDashes' is used to find if there are any remaining unknown letters in the word.
  // 'found' returns true if any letter in the word matches the supplied letter. This
  //     is used to know whether the user's guess is correct or incorrect.
  this.checkLetter = (l) => {
    let noDashes = true;
    let found =false;
    for (let i=0; i<this.word.length; i++) {
      found = this.word[i].guessChar(l) || found;
      if (this.word[i].guessed === false) {
        noDashes = false;  // a dash still exists
      } 
    }
    this.solved = noDashes; // word has been solved
    return found;
  }

}

module.exports = Word;