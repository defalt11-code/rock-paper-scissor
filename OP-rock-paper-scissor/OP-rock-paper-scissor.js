/* Odin project rock paper and scissor */
const roundResult = document.querySelector(".round-result")

const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const draw = document.querySelector(".draw-score");

const computerMove = () => {
  const moves = ["rock", "paper", "scissor"];
  return moves[Math.floor(Math.random() * moves.length)];
};

let possibleOutCome = {
  rock: {rock: "tie", paper: "you lose", scissor: "you win"},
  paper: {rock: "you win", paper: "tie", scissor: "you lose"},
  scissor : {rock: "you lose", paper: "you win", scissor: "tie"}
};

const humanMove = document.querySelector("#js-moves-container");

/* get the human move base on the target id */
humanMove.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if(button) {
    let humanChoice = button.id;
    playRound(humanChoice);
  };
});

let gameRound = 0;

let score = {
    player: 0,
    computer: 0,
    tie: 0
};

function playRound(humanChoice) {
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

  roundResult.textContent = result;

  displayScore();
  console.log(gameRound++);
  console.log(score);
  if(gameRound === 5) {
    showTheWinner(score.player, score.computer, score);
    resetTheScore();
    gameRound = 0;
  };
};

function displayScore() {
  playerScore.textContent = score.player;
  computerScore.textContent = score.computer;
  draw.textContent = score.tie;
};

function resetTheScore() {
  score = { player: 0, computer: 0, tie: 0};
};

function showTheWinner(playerFinalScore, computerFinalScore, scoreBoard) {   
  const gameResult = document.createElement("p");

  if(playerFinalScore > computerFinalScore) {
    gameResult.textContent = "Player wins!"
    alert("Player wins!")
  }else if(playerFinalScore < computerFinalScore) {
    alert("Computer wins!")
    gameResult.textContent = "Computer wins!"
  };

  console.log(scoreBoard)
};