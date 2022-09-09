// Create an array with values rock, paper, scissors
const options = ["rock","paper","scissors"];

// Create function to pick random item from array
function getComputerChoice() {
  let randomItem = options[Math.floor(Math.random() * options.length)];
  return randomItem;
}

// Create variables to store computer and user choices
const computerSelection = getComputerChoice();
const playerSelection = prompt("Rock, paper or scissors?");



console.log(getComputerChoice());

// while condition is true
//     if computerSelection equals rock AND userSelection equals scissors
//         show message "You lose! Rock beats Scissors"
//     if computerSelection equals scissors AND userSelection equals paper
//         show message "You lose! Scissors beats Paper"
//     if computerSelection equals paper AND userSelection equals rock
//         show message "You lose! Paper beats Rock"
//     if computerSelection equals scissors AND userSelection equals rock
//       show message "You win! Rock beats Scissors"
//     if computerSelection equals paper AND userSelection equals scissors
//       show message "You win! Scissors beats Paper"
//     if computerSelection equals rock AND userSelection equals paper
//       show message "You win! Paper beats Rock"
//       else {
//         ask user to choose again
//       }
    