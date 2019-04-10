var Letter = require('./Letter.js');

function Word(str) {

  this.solved = true;
  this.word = [];
  for (let i=0; i<str.length; i++) {
    this.word.push(new Letter(str[i]));
  }

  this.showWord = () => {
    let guessedStr = '';
    for (let i=0; i<this.word.length; i++) {
      guessedStr += this.word[i];
    }
    return guessedStr;
  }

  this.checkLetter = (l) => {
    let noDashes = true;
    let letterInWord = false;
    let found =false;
    for (let i=0; i<this.word.length; i++) {
      found = this.word[i].guessChar(l) || found;
      if (this.word[i].guessed === false) {
        noDashes = false;  // a dash still exists
      } 
      // if (found){
      //   letterInWord = true;
      // }
    }
    this.solved = noDashes;
    return found;
  }

}

module.exports = Word;