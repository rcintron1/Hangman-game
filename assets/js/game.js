// using the rules based on the site listed on the readme,
// I will give the user 8 chances to win.

// select a random word
var varWords = ["union","research","cruelty","shadow","crown","abduction","applause","undersea","glutton","eternity","endorsement"];
var randomWord;
// Keep a record of all selected letters
var guessedLetters;
// Location in page to place all selected letters
var spanguessedL = document.getElementById("guessedL");

// Eventhandler for key pressed
document.onkeyup = function(event){
  console.log(event.key);
  compareLetters(event.key);
}

function startGame(){
  //math.floor rounds up to the nearest whole number
  //Math.Random() returns a random float between 0 and 1 (including 0, excluding 1)
  randomWord = varWords[Math.floor(Math.random() * varWords.length)];
  guessedLetters = "";
  spanguessedL.textContent = "";
}

// Function to see if letter is in random word
function compareLetters(letter){
  if(randomWord.includes(letter)){
    replaceUnder(letter);
  }else{
    guessedLetters += letter;
    spanguessedL.textContent = guessedLetters;
  }
}

// function to replace underscore with matching letter
function replaceUnder(letter){
  if (letter){
    //replace underscore where letter belongs

  }else{
    // create underscores on page, should only happen in beginning of game

  }
}
startGame();
