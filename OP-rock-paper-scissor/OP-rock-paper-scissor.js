/* Odin project rock paper and scissor */

const scoreBoard = document.createElement("p");

const computerMove = () => {
  const moves = ["rock", "paper", "scissor"];
  return moves[Math.floor(Math.random() * moves.length)];
};

let possibleOutCome = {
  rock: {rock: "tie", paper: "you lose", scissor: "you win"},
  paper: {rock: "you win", paper: "tie", scissor: "you lose"},
  scissor : {rock: "you lose", paper: "you win", scissor: "tie"}
};

const humanMove = document.querySelector(".moves");

let gameRound = 0;

let score = {
    player: 0,
    computer: 0,
    tie: 0
    };

/* get the human move base on the target id */
humanMove.addEventListener("click", (event) => {
  let humanChoice = event.target.id;
  
  const computerChoice = computerMove();

  let result = possibleOutCome[humanChoice]?.[computerChoice] || "Invalid move";
  console.log(`${humanChoice} - ${computerChoice}\n\n${result}`);

  switch(result) {
    case "you win":
      score.player++
      break;
    case "you lose":
      score.computer++
      break;
    case "tie":
      score.tie++
      break;
  };

  console.log(gameRound++);
  console.log(score);
  if(gameRound === 5) {
    showTheWinner(score.player, score.computer, score);
    resetTheScore();
    gameRound = 0;
  }
});

function displayScore() {
  score
};

function resetTheScore() {
  score = { player: 0, computer: 0, tie: 0};
};

function showTheWinner(playerScore, ComputerScore, scoreBoard) {   
  const gameResult = document.createElement("p");

  if(playerScore > ComputerScore) {
    gameResult.textContent = "Player wins!"
  }else if(playerScore < ComputerScore) {
    gameResult.textContent = "Computer wins!"
  };

  console.log(scoreBoard)
};