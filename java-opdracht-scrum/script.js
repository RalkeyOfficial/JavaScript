'use strict';


// ELEMENTS
const diceImageElement = document.querySelector(".dice");
const rollDiceElement = document.querySelector(".btn--roll");
const holdDiceElement = document.querySelector(".btn--hold");
const resetGameElement = document.querySelector(".btn--new");

const backgroundPlayer1 = document.querySelector(".player--0");
const backgroundPlayer2 = document.querySelector(".player--1");

const player1CurrentScoresElement = document.getElementById("current--0");
const player2CurrentScoresElement = document.getElementById("current--1");

const player1FinalScoresElement = document.getElementById("score--0");
const player2FinalScoresElement = document.getElementById("score--1");

// EXTRA VARIABLES
let currentScores = [0, 0];
let finalScores = [0, 0];
let currentPlayer = 0;
let scoreToWin = 100;


//!     <-- EventListeners -->
//* ROLL DICE & ADD SCORES & SWITCH PLAYERS
rollDiceElement.addEventListener("click", function(){

    const generatedNumber = GenerateRandomNumber(6);
    diceImageElement.src = `dice-${generatedNumber}.png`;

    if(generatedNumber === 1){
        resetCurrentScores();
        switchPlayers();
        ShowScoresOnScreen();

    }else{
        currentScores[currentPlayer] += generatedNumber;
        ShowScoresOnScreen();

    }
})

//* HOLD CURRENT SCORES & CHECK IF WINNER & SWITCH PLAYERS
holdDiceElement.addEventListener("click", function(){
    finalScores[currentPlayer] += currentScores[currentPlayer];

    resetCurrentScores();
    ShowScoresOnScreen();
    checkIfWinner();
    switchPlayers();
})

//* RESET GAME
resetGameElement.addEventListener("click", function(){
    resetGame();
})


//!     <-- Functions -->
//* laat scores op scherm zien
function ShowScoresOnScreen() {
    [player1CurrentScoresElement.textContent, player2CurrentScoresElement.textContent] = currentScores;
    [player1FinalScoresElement.textContent, player2FinalScoresElement.textContent] = finalScores;
}

//* reset current score of current player
function resetCurrentScores() {
    currentScores[currentPlayer] = 0;
}

//* switch current player & change BG
function switchPlayers() {
    //if current player = 0
    //  if true: current player = 1
    //  if false: current player = 0
    currentPlayer = (currentPlayer === 0) ? 1 : 0;
    changeBG();
}

//* check if current player won0
function checkIfWinner() {
    if (finalScores[currentPlayer] >= scoreToWin) {
        showVictoryScreen();
        return true;
    }
    return false;
}

//* show a alert that the current player won & reset game over 5 seconds
function showVictoryScreen() {
    alert(`Player ${currentPlayer + 1} WON!`);
    setTimeout(resetGame, 3000);
}

//* reset the game
function resetGame() {
    currentScores = [0,0];
    finalScores   = [0,0];

    ShowScoresOnScreen();
}

//* generate a random number
function GenerateRandomNumber(n) {
    return Math.floor(Math.random() * n) + 1;
}

//* change background color
function changeBG() {
    // changes BG color by adding a class to the active player's background
    backgroundPlayer1.classList.toggle("player--active");
    backgroundPlayer2.classList.toggle("player--active");
}

