// r > s    s > p    p > r

const signs = ["rock", "paper", "scissors"];

function getComputerChoice() {
  // for (let i = 0; i < choice.length; i++) {

  // }
  const randomChoice = Math.floor(Math.random() * 3 - 0) + 0;
  console.log(signs[randomChoice]);
  // console.log(randomChoice)
  return signs[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  const winMessage = `You Won! ${playerSelection} beats ${computerSelection}`;
  const loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
  const tieMessage = "It's a Tie!";

  if (playerSelection === signs[0] && computerSelection === signs[2]) {
    return winMessage;
  } else if (playerSelection === signs[2] && computerSelection === signs[1]) {
    return winMessage;
  } else if (playerSelection === signs[1] && computerSelection === signs[0]) {
    return winMessage;
  } else if (playerSelection === computerSelection) {
    return tieMessage;
  } else return loseMessage;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
