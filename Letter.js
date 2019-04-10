function Letter(letter) {
  this.letter = letter.toUpperCase();
  this.guessed = false;

  // Show the character and blank space if it has been guessed, otherwise return an underscore and a bland space
  this.toString = () => {
    if (this.guessed) {
      return (`${this.letter} `);
    } else {
      return ("_ ")
    }
  }

}

// If supplied letter matches this object letter, set guessed to be true.
Letter.prototype.guessChar = function(c) {
  if (c.toUpperCase() === this.letter) {
    this.guessed = true;
    return true;
  } else {
    return false;
  }
}

module.exports = Letter;