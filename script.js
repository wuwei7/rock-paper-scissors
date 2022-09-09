// Create an array with values rock, paper, scissors
const options = ["rock","paper","scissors"];

// Create function to pick random item from array
function getComputerChoice() {
  let randomItem = options[Math.floor(Math.random() * options.length)];
  return randomItem;
}

// Create function to ask user to pick one of the options
function getPlayerChoice() {
  let playerSelection = prompt("Choose your weapon: rock, paper or scissors?");
  return playerSelection;
}

// Create function to play a round of the game
keepGoing = true;
function playRound(computerSelection, playerSelection) {
  
  while (keepGoing) {

    if (computerSelection === "rock" && playerSelection === "scissors") {
      return "computer";
      alert("You lose! Rock beats Scissors");
      keepGoing = false;
    }

    if (computerSelection === "scissors" && playerSelection === "paper") {
      return "computer";
      alert("You lose! Scissors beats Paper");
      keepGoing = false;
    }

    if (computerSelection === "paper" && playerSelection === "rock") {
      return "computer";
      alert("You lose! Paper beats Rock");
      keepGoing = false;
    }

    if (computerSelection === "scissors" && playerSelection === "rock") {
      return "player";
      alert("You win! Rock beats Scissors");
      keepGoing = false;
    }

    if (computerSelection === "paper" && playerSelection === "scissors") {
      return "player";
      alert("You win! Scissors beats Paper");
      keepGoing = false;
    }

    if (computerSelection === "rock" && playerSelection === "paper") {
      return "player";
      alert("You win! Paper beats Rock");
      keepGoing = false;
    } 
    // else {
    //   alert("Invalid answer. Please try again.");
    //   getPlayerChoice();
    //   keepGoing = true;
    // }

  }

}

function game() {
  for (let i = 0; i < 5; i++) {
    let winner = playRound();
    winner(winner);

    // let computer = 0;
    // let player = 0;
    // if (winner === "player") {
    //   player++;
    // } else {
    //   computer++;
    // }
  }
  
}

// Create variables to store computer and user choices
const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice().toLowerCase();

playRound(computerSelection, playerSelection);

// console.log(playRound(computerSelection, /playerSelection/i));