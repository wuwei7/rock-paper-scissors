// Create an array with values rock, paper, scissors
const options = ["rock","paper","scissors"];

// Picks random item from array
function getComputerChoice() {
  let randomItem = options[Math.floor(Math.random() * options.length)];
  return randomItem;
}

// Asks user to pick one of the options
function getPlayerChoice() {
  let playerSelection = prompt("Choose your weapon: rock, paper or scissors?");
  return playerSelection;
}

// Plays a round of the game
function playRound(computerSelection, playerSelection) {

  while(true) {
    
    if (computerSelection === "rock" && playerSelection === "scissors") {
      alert("You lose! Rock beats Scissors");
      return "computer";
    }

    if (computerSelection === "scissors" && playerSelection === "paper") {
      alert("You lose! Scissors beats Paper");
      return "computer";
    }

    if (computerSelection === "paper" && playerSelection === "rock") {
      alert("You lose! Paper beats Rock");
      return "computer";
    }

    if (computerSelection === "scissors" && playerSelection === "rock") {
      alert("You win! Rock beats Scissors");
      return "player";
    }

    if (computerSelection === "paper" && playerSelection === "scissors") {
      alert("You win! Scissors beats Paper");
      return "player";
    }

    if (computerSelection === "rock" && playerSelection === "paper") {
      alert("You win! Paper beats Rock");
      return "player";
    }

    if (computerSelection === playerSelection) {
      alert("It's a tie! Try again")
      break;
    }
    // else {
    //   alert("Invalid answer. Please try again.");
    //   getPlayerChoice();
    //   keepGoing = true;
    // }
  }
}

// Keeps count of number of game rounds and wins of each player
function game() {
  let computer = 0;
  let player = 0;
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice().toLowerCase();
    const playerSelection = getPlayerChoice();
    let winner = playRound(computerSelection, playerSelection);

    if (winner === "player") {
      player++;
    } else if (winner === "computer") {
      computer++;
    } else {
      i--;
    }
  }

  winner(computer, player);

}

// Tells the winner after 5 rounds
function winner(computer, player) {
  if (player > computer) {
    alert("You win!");
  } else {
    alert("You lose :(");
  }
}

game();