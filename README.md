# constructor-word-guess

This is a console based version of hangman. There are three phrases for the user to guess. To run the code, enter `node index.js` in the terminal window.

The hidden phrase is displayed as a series of dashes.
Enter a letter.
* If the letter is in the phrase, the dashes representing that letter are replaced with the letter and the user is prompted for a new letter.
* If the letter is not in the phrase, the user is told that the guess is incorrect and how many incorrect guesses they have remaining.

Upon completion of the phrase (either by solving it, or by running out of guesses) the user is asked if they would like to play again. When all three puzzles have been solved, the game ends
