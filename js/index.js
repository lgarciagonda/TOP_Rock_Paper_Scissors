
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

function playerDecition() {
    let playerChoice = prompt("Rock, Paper or Scissors?")
    if (playerChoice.toUpperCase() === "ROCK"){
        return "Rock";
    } else if(playerChoice.toUpperCase() === "PAPER"){
        return "Paper";
    } else if(playerChoice.toUpperCase() === "SCISSORS"){
        return "Scissors";
    }
};

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection){
    console.log(`Player select: ${playerSelection}`);
    console.log(`Computer select: ${computerSelection}`);
    if(playerSelection === "Rock" && computerSelection === "Scissors"){
        console.log("You Win! Rock beats Scissors");
        playerScore++
        console.log(`Player Score: ${playerScore}`)
        console.log(`Computer Score: ${computerScore}`)
    } else if(playerSelection === "Paper" && computerSelection === "Rock"){
        console.log("You Win! Paper beats Rock");
        playerScore++
        console.log(`Player Score: ${playerScore}`)
        console.log(`Computer Score: ${computerScore}`)
    } else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        console.log("You Win! Scissors beats Paper")
        playerScore++
        console.log(`Player Score: ${playerScore}`)
        console.log(`Computer Score: ${computerScore}`)
    } else if(playerSelection === computerSelection){
        console.log("It's a tie!")
        console.log(`Player Score: ${playerScore}`)
        console.log(`Computer Score: ${computerScore}`)
    } else{
        console.log(`You Lost! ${computerSelection} beats ${playerSelection}`)
        computerScore++
        console.log(`Player Score: ${playerScore}`)
        console.log(`Computer Score: ${computerScore}`)
    } 
};

function game(){
    playRound(playerDecition(), getComputerChoice());
    playRound(playerDecition(), getComputerChoice());
    playRound(playerDecition(), getComputerChoice());
    playRound(playerDecition(), getComputerChoice());
    playRound(playerDecition(), getComputerChoice());
};

game();
