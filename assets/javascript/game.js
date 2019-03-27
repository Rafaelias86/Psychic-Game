// Creates an array that lists out all of the options (Alphabet).
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Creating variables to hold the number of wins, losses, gusses left and guest guesses. start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuesses = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("numWins-text");
var lossesText = document.getElementById("numLosses-text");
var guessesLeftText = document.getElementById("numGuesses-text");
var yourGuessesText = document.getElementById("playersGuess-text");

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

// Determines which key was pressed.
  var userGuess = event.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

// This logic determines the outcome of the game (win/loss/guesses left), and increments the appropriate number

      if (userGuess === computerGuess) {
      wins++;
      guessesLeft = 9;
      yourGuesses = [];
      }

      if (userGuess != computerGuess) {
      guessesLeft--;
      yourGuesses.push(userGuess);
      }

      if (guessesLeft < 1) {
      alert("You lose!");
      guessesLeft = 9;
      yourGuesses = [];
      losses++;
      }

// Hide the directions
directionsText.textContent = "";

 // Display the user and computer guesses, and wins/losses/ties.
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesLeftText.textContent = "Guesses left: " + guessesLeft;
yourGuessesText.textContent = "Your guesses so far: " + yourGuesses;

};

