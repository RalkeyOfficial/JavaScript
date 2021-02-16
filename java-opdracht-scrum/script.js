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

function GenerateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

// ELEMENTEN
const diceImageElement = document.querySelector(".dice");
const rollDiceElement = document.querySelector(".btn--roll");
const holdDiceElement = document.querySelector(".btn--hold");

const player1CurrentScoresElement = document.getElementById("current--0");
const player2CurrentScoresElement = document.getElementById("current--1");

const player1FinalScoresElement = document.getElementById("score--0");
const player2FinalScoresElement = document.getElementById("score--1");

// HULP VARIABELEN
const currentScores = [0, 0]
const finalScores = [0, 0]
let currentPlayer = 0;

/*
    use function "GenerateRandomNumber"
    change dobbelsteen picture to the right image according to the random number
    check if generated number == 1
        if true:  maak current score 0
        if false: voeg generated number toe aan current score
*/

// ROLL DICE & ADD SCORES
rollDiceElement.addEventListener("click", function(){
    const generatedNumber = GenerateRandomNumber();
    diceImageElement.src = `dice-${generatedNumber}.png`;

    if(generatedNumber === 1){
        switchPlayers();
        ShowScoresOnScreen();

    }else{
        currentScores[currentPlayer] += generatedNumber;
        ShowScoresOnScreen();

        console.log(currentScores);
    }
})

holdDiceElement.addEventListener("click", function(){
    finalScores[currentPlayer] += currentScores[currentPlayer];

    switchPlayers();
    ShowScoresOnScreen();
})

function ShowScoresOnScreen() {
    player1CurrentScoresElement.textContent = currentScores[0];
    player2CurrentScoresElement.textContent = currentScores[1];

    player1FinalScoresElement.textContent = finalScores[0];
    player2FinalScoresElement.textContent = finalScores[1];
}

function switchPlayers() {
    currentScores[currentPlayer] = 0;
    if(currentPlayer === 0){
        currentPlayer = 1;
    } else {
        currentPlayer = 0;
    }
}

