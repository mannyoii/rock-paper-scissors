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
