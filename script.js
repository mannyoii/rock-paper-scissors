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

function game() {
  let userScore = 0;
  let computerScore = 0;
  function playRound(playerSelection, computerSelection) {
    const winMessage = `You Won! ${playerSelection} beats ${computerSelection}`;
    const loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
    const tieMessage = "It's a Tie!";

    if (playerSelection === signs[0] && computerSelection === signs[2]) {
      userScore++;
      console.log(userScore);
      // return winMessage;
    } else if (playerSelection === signs[2] && computerSelection === signs[1]) {
      userScore++;
      console.log(userScore);

      // return winMessage;
    } else if (playerSelection === signs[1] && computerSelection === signs[0]) {
      userScore++;
      console.log(userScore);

      // return winMessage;
    } else if (playerSelection === computerSelection) {
      userScore = userScore;
      computerScore = computerScore;
    } else {
      computerScore++;
      // return loseMessage;
    }
  }

  for (let i = 0; i < 5; i++) {
    let userChoice = prompt("What's your choice?");
    const playerSelection = userChoice;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(userScore, computerScore);
    console.log(`player: ${playerSelection}`, `computer: ${computerSelection}`);
  }

  let winner =
    userScore > computerScore
      ? "Player has won the game!"
      : "Computer has won the game!";

  return winner;
}
