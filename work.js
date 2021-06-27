const paper = "Paper";
const rock = "Rock";
const scissors= "Scissors";
const arrGame = [rock, paper, scissors];

const draw = "Draw!";
const playerRockWin ="You won! Rock beats Scissors.";
const playerPaperWin ="You won! Paper beats Rock.";
const playerScissorsWin ="You won! Scissors beats Paper.";
const playerRockLose ="You lose! Paper beats Rock.";
const playerPaperLose ="You lose! Scissors beats Paper.";
const playerScissorsLose ="You lose! Rock beats Scissors";

const viewStatus = document.querySelector('.Status');

let playerScore = 0;
let computerScore = 0;

document.querySelectorAll('.board').forEach(board => board.addEventListener('click', onBoardClick))

function computerPlay () {
  return (arrGame[Math.floor(Math.random() * arrGame.length)]);
}

function playRound(playerSelection, computerSelection) {
  if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
    return  document.getElementById("status").innerHTML = playerRockWin;

  } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
    return document.getElementById("status").innerHTML = playerPaperWin;

  } else if ((playerSelection === "Scissors") && (computerSelection === "Paper")) {
    return document.getElementById("status").innerHTML = playerScissorsWin;

  } else if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
    return document.getElementById("status").innerHTML = playerRockLose;

  } else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
    return document.getElementById("status").innerHTML = playerPaperLose;

  } else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
    return document.getElementById("status").innerHTML = playerScissorsLose;  

  } else if (((playerSelection === "Rock") && (computerSelection === "Rock")) || 
             ((playerSelection === "Paper") && (computerSelection === "Paper")) ||
             ((playerSelection === "Scissors") && (computerSelection === "Scissors"))) {
    return document.getElementById("status").innerHTML = draw;
  }
}

function onBoardClick(elementEvent) {
  let element = elementEvent.target;
  playerSelection = element.getAttribute('index')
  let computerSelection = computerPlay()
  let endRound = playRound(playerSelection, computerSelection)
  console.log(playerSelection);
  console.log(computerSelection);
  console.log(playRound(playerSelection, computerSelection));

  if ((endRound === playerRockWin) || (endRound === playerPaperWin) || (endRound === playerScissorsWin)) {
    playerScore += 1;
    return document.getElementById("player").innerHTML = "Player score is: " + playerScore;
  } else if (endRound !== draw) {
    computerScore += 1;
    return document.getElementById("computer").innerHTML = "Computer score is: " + computerScore;
  }
}

function restart() {
  if ((playerScore !== 0) || (computerScore !== 0))
  return  [playerScore = 0, computerScore = 0, 
  document.getElementById("player").innerHTML = "Player score is: 0",
  document.getElementById("computer").innerHTML = "Computer score is: 0"]    
}
