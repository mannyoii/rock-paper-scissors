// r > s    s > p    p > r

const signs = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3 - 0) + 0;
  // console.log(signs[randomChoice]);
  // console.log(randomChoice)
  return signs[randomChoice];
}

// function game() {
//   let userScore = 0;
//   let computerScore = 0;
//   function playRound(playerSelection, computerSelection) {
//     const winMessage = `You Won! ${playerSelection} beats ${computerSelection}`;
//     const loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
//     const tieMessage = "It's a Tie!";

//     if (playerSelection === signs[0] && computerSelection === signs[2]) {
//       userScore++;
//       console.log(userScore);
//       // return winMessage;
//     } else if (playerSelection === signs[2] && computerSelection === signs[1]) {
//       userScore++;
//       console.log(userScore);

//       // return winMessage;
//     } else if (playerSelection === signs[1] && computerSelection === signs[0]) {
//       userScore++;
//       console.log(userScore);

//       // return winMessage;
//     } else if (playerSelection === computerSelection) {
//       userScore = userScore;
//       computerScore = computerScore;
//     } else {
//       computerScore++;
//       // return loseMessage;
//     }
//   }

//   // for (let i = 0; i < 5; i++) {
//   //   let userChoice = prompt("What's your choice?");
//   //   const playerSelection = userChoice;
//   //   const computerSelection = getComputerChoice();
//   //   playRound(playerSelection, computerSelection);
//   //   console.log(userScore, computerScore);
//   //   console.log(`player: ${playerSelection}`, `computer: ${computerSelection}`);
//   // }

//   if (userScore > computerScore) {
//     return "Player has won the game";
//   } else if (userScore === computerScore) {
//     return "It's a tie";
//   } else return "Computer has won the game!";
// }

let userScore = 0;
let computerScore = 0;
const user = document.querySelector(".user");
const computer = document.querySelector(".computer");
const message = document.querySelector(".message");
function playRound(playerSelection, computerSelection) {
  const winMessage = `You Won! ${playerSelection} beats ${computerSelection}`;
  const loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
  const tieMessage = "It's a Tie!";

  if (playerSelection === signs[0] && computerSelection === signs[2]) {
    userScore++;
    user.textContent = userScore;
    // console.log(userScore);
    // return winMessage;
  } else if (playerSelection === signs[2] && computerSelection === signs[1]) {
    userScore++;
    user.textContent = userScore;

    // console.log(userScore);

    // return winMessage;
  } else if (playerSelection === signs[1] && computerSelection === signs[0]) {
    userScore++;
    user.textContent = userScore;

    console.log(userScore);

    // return winMessage;
  } else if (playerSelection === computerSelection) {
    userScore = userScore;
    computerScore = computerScore;
  } else {
    computerScore++;
    computer.textContent = computerScore;
    // return loseMessage;
  }
  if (userScore >= 5) {
    // return "Player has won the game";
    message.textContent = "Player has won the game!";
  } else if (computerScore >= 5) {
    // return "It's a tie";
    message.textContent = "Computer has won the game!";
  }
}

const buttons = document.querySelectorAll(".btn");
buttons.forEach((x) => {
  x.addEventListener("click", (e) => {
    const userChoice = e.target.classList[1];
    const playerSelection = userChoice;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    console.log(
      `click: ${e.target.classList[1]}`,
      `player: ${playerSelection}`,
      `computer: ${computerSelection}`
    );
    // const btnClass = this.getAttribute("class");
    // console.log(btnClass);
  });
});

// const buttons = document.querySelector(".btn");
// buttons.addEventListener("click", (e) => {
//   console.log(e);
// });
