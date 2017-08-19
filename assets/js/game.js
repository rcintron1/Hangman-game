// using the rules based on the site listed on the readme,
// I will give the user 8 chances to win.

// select a random word
var varWords = ["union","research","cruelty","shadow","crown","abduction","applause","undersea","glutton","eternity","endorsement"];
var randomWord;
var usedLetters;
// Keep a record of all selected letters
var guessedLetters;
// Location in page to place all selected letters
var spanguessedL = document.getElementById("guessedL");
// Location of underscores that will be replaced with correct letters
var spanWord = document.getElementById("spanWord");
// Used to populate Wins span
var wins = document.getElementById("wins");
// Used to populate Losses span
var losses = document.getElementById("losses");
// Used to find out if all characters have been matched
var randomWordcharCount = 0;
var wrongLetters = 8;

// Eventhandler for key pressed
document.onkeyup = function(event){
  console.log("onkeyup:" + event.key);
  compareLetters(event.key);
}

function startGame(){
  //math.floor rounds up to the nearest whole number
  //Math.Random() returns a random float between 0 and 1 (including 0, excluding 1)
  randomWord = varWords[Math.floor(Math.random() * varWords.length)];
  guessedLetters = "";
  usedLetters = "";
  spanguessedL.textContent = "";
  replaceUnder();
  wrongLetters = 8;
}

// Function to see if letter is in random word
// Also used to update the counts
function compareLetters(letter){
  if (usedLetter(letter)){
    console.log("function compareLetters -> letter" + " has been used")
    alert("Letter has already been used!")
    return;
  }
  console.log("function->compareLetters")
  if(randomWord.includes(letter)){
    replaceUnder(letter);
  }else{
    guessedLetters += letter;
    spanguessedL.textContent = guessedLetters;
    wrongLetters--;
  }
  usedLetters += letter;
  setTimeout(checkGame(), 1000);
}

function usedLetter(letter){
  if (usedLetters.includes(letter)){
    console.log("")
    return true;
  }else{
    return false;
  }
}

function checkGame(){
  if (randomWordcharCount == 0){
    wins.textContent = Number(wins.textContent) + 1;
    alert("You Won");
    startGame();
  }else if (wrongLetters == 0) {
    losses.textContent = Number(losses.textContent) + 1;
    alert("You Lose");
    startGame();
  }
}

// function to replace underscore with matching letter
function replaceUnder(letter){
  console.log("function->replaceUnder")
  if (letter){
    console.log("function->replaceUnder->if(letter)")
    //replace underscore where letter belongs
    for (i=0; i<randomWord.length; i++){
      if (letter == randomWord[i]){
        x = spanWord.textContent;
        x = x.substring(0,i) + letter + x.substring(i+1);
        spanWord.textContent = x;
        randomWordcharCount--;
        console.log("function->replaceUnder:" +x + " Letters left=" + randomWordcharCount.toString());
      }
    }
  }else{
    // create underscores on page, should only happen in beginning of game
    spanWord.textContent = Array(randomWord.length + 1).join("_");
    randomWordcharCount = randomWord.length
  }
}

startGame();
