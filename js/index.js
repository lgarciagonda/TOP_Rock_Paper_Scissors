
const btnRock = document.querySelector(".btnRock");
const btnPaper = document.querySelector(".btnPaper");
const btnScissors = document.querySelector(".btnScissors");
const displayResult = document.querySelector(".displayResult")
const displayComputerSelection = document.querySelector(".displayComputerSelection")
const displayPlayerSelection = document.querySelector(".displayPlayerSelection")
const displayPlayerScore = document.querySelector(".displayPlayerScore")
const displayComputerScore = document.querySelector(".displayComputerScore")

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "Rock";
    } else if(computerChoice === 1) {
        return "Paper";
    } else if (computerChoice === 2) {
        return "Scissors";
    }
};

function checkResult(){
    if(playerScore === 5){
    displayResult.textContent = "Player wins the match!"
    } else if (computerScore === 5){
    displayResult.textContent = "Computer wins the match!"
    }
};

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection){
    displayPlayerSelection.textContent = `Player select: ${playerSelection}`
    displayComputerSelection.textContent = `Computer select: ${computerSelection}`
    if(playerSelection === "Rock" && computerSelection === "Scissors"){
        displayResult.textContent = "Player wins the round! Rock beats Scissors"
        playerScore++
        displayPlayerScore.textContent = `Player Score: ${playerScore}`
        displayComputerScore.textContent = `Computer Score: ${computerScore}`
        checkResult()
    } else if(playerSelection === "Paper" && computerSelection === "Rock"){
        displayResult.textContent = "Player wins the round! Paper beats Rock"
        playerScore++
        displayPlayerScore.textContent = `Player Score: ${playerScore}`
        displayComputerScore.textContent = `Computer Score: ${computerScore}`
        checkResult()
    } else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        displayResult.textContent = "Player wins the round! Scissors beats Paper"
        playerScore++
        displayPlayerScore.textContent = `Player Score: ${playerScore}`
        displayComputerScore.textContent = `Computer Score: ${computerScore}`
        checkResult()
    } else if(playerSelection === computerSelection){
        displayResult.textContent = "It's a tie!"
        displayPlayerScore.textContent = `Player Score: ${playerScore}`
        displayComputerScore.textContent = `Computer Score: ${computerScore}`
        checkResult()
    } else{
        displayResult.textContent = `Computer wins the round! ${computerSelection} beats ${playerSelection}`
        computerScore++
        displayPlayerScore.textContent = `Player Score: ${playerScore}`
        displayComputerScore.textContent = `Computer Score: ${computerScore}`
        checkResult()
    }
};

btnRock.addEventListener ('click', () => {
    playRound("Rock",getComputerChoice());
});
btnPaper.addEventListener ('click', () => {
    playRound("Paper",getComputerChoice());
});
btnScissors.addEventListener ('click', () => {
    playRound("Scissors",getComputerChoice());
});

/* function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?")
    if (playerChoice.toUpperCase() === "ROCK"){
        return "Rock";
    } else if(playerChoice.toUpperCase() === "PAPER"){
        return "Paper";
    } else if(playerChoice.toUpperCase() === "SCISSORS"){
        return "Scissors";
    }
}; */