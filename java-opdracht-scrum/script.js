'use strict';

/* STAPPENPLAN OPLOSSEN PROBLEEM */
/* New Game starten =>
* alle currentScores op 0, alle bankSCores op 0 en speler 1 mag beginnen,
* dobbelsteen nog niet zien, kleur van de achtergrond is ook juist
*
* Roll Dice => plaatje aanpassen
*   ALS score 1 => currentScore huidige speler moet naar 0, wisselSpeler (ook de achtergrond)
*   ALS score != 1 => tel op bij CurrentScore
*
*
* HOLD => tel currentScore op bij bankScore huidige speler, currentScore komt op 0,
* ALS bank > winGetal,
* DAN endGame =>winnaarskleurtje / wie is de winnaar (player 1 heeft gewonnen!)
* / alles resetten (na 20 sec) of new game
* ELSE wisselSpeler (ook de achtergrond)

*/


// ELEMENTEN
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

// HULP VARIABELEN
const currentScores = [0, 0]
const finalScores = [0, 0]
let currentPlayer = 0;
let scoreToWin = 100;


//!Randomize starting player
currentPlayer = Math.floor(Math.random() * 1) + 1;

//!starting functions
changeBG();


//!EventListeners
// ROLL DICE & ADD SCORES & SWITCH PLAYERS
rollDiceElement.addEventListener("click", function(){

    const generatedNumber = GenerateRandomNumber();
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

//HOLD CURRENT SCORES & CHECK IF WINNER & SWITCH PLAYERS
holdDiceElement.addEventListener("click", function(){
    finalScores[currentPlayer] += currentScores[currentPlayer];

    resetCurrentScores();
    ShowScoresOnScreen();
    checkIfWinner();
    switchPlayers();
})

//RESET GAME
resetGameElement.addEventListener("click", function(){
    resetGame();
})


//!Functions
//laat scores op scherm zien
function ShowScoresOnScreen() {
    [player1CurrentScoresElement.textContent, player2CurrentScoresElement.textContent] = currentScores;
    [player1FinalScoresElement.textContent, player2FinalScoresElement.textContent] = finalScores;
}

//reset de current scores van de current player
function resetCurrentScores() {
    currentScores[currentPlayer] = 0;
}

//switch van current player & change BG
function switchPlayers() {
    //if current player = 0
    //  if true: current player = 1
    //  if false: current player = 0
    currentPlayer = (currentPlayer === 0) ? 1 : 0;
    changeBG();
}

//check if current player won
function checkIfWinner() {
    if (finalScores[currentPlayer] >= scoreToWin) {
        showVictoryScreen();
        return true;
    }
    return false;
}

//show a alert that the current player won & reset game over 5 seconds
function showVictoryScreen() {
    alert(`Player ${currentPlayer + 1} WON!`);
    setTimeout(resetGame, 5000);
}

//reset the game
function resetGame() {
    currentScores[0] = 0;
    currentScores[1] = 0;
    finalScores[0] = 0;
    finalScores[1] = 0;

    ShowScoresOnScreen();
}

//generate a random number
function GenerateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

//change background color
function changeBG() {
    // changes BG color by adding a class to the active player's background
    if (currentPlayer === 0) {
        backgroundPlayer1.classList.add("player--active");
        backgroundPlayer2.classList.remove("player--active");
    } else {
        backgroundPlayer1.classList.remove("player--active");
        backgroundPlayer2.classList.add("player--active");
    }
}

