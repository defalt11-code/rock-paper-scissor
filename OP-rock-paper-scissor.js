/* Odin project rock paper and scissor */

/*DOM REFERENCE*/
const roundInfoContainer = document.querySelector(".container");

const playerPickContainer = document.querySelector(".player-pick-container");
const playerInfo = document.querySelector("#player-info");
const humanPick = document.createElement("div");

const computerPickContainer = document.querySelector(".computer-pick-container");
const computerInfo = document.querySelector("#computer-info");
const computerPick = document.createElement("div");

const roundResult = document.querySelector(".round-result");

const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const draw = document.querySelector(".draw-score");
/*DOM REFERENCE*/


const computerMove = () => {
  const moves = ["rock", "paper", "scissor"];
  return moves[Math.floor(Math.random() * moves.length)];
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

let possibleOutCome = {
  rock: {rock: "Draw", paper: "You lose", scissor: "You win"},
  paper: {rock: "You win", paper: "Draw", scissor: "You lose"},
  scissor : {rock: "You lose", paper: "You win", scissor: "Draw"}
};

let gameRound = 0;

let score = {
    player: 0,
    computer: 0,
    tie: 0
};

function playRound(humanChoice) {
  roundInfoContainer.appendChild(playerPickContainer);
  roundInfoContainer.appendChild(roundResult);
  roundInfoContainer.appendChild(computerPickContainer);

  const computerChoice = computerMove();

  let result = possibleOutCome[humanChoice]?.[computerChoice] || "Invalid move";
  console.log(`${humanChoice} - ${computerChoice}\n\n${result}`);

  switch(result) {
    case "You win":
      score.player++
      break;
    case "You lose":
      score.computer++
      break;
    case "Draw":
      score.tie++
      break;
  };
  
  playerInfo.textContent = "Player picked"
  roundResult.textContent = result;
  roundResult.classList.add("jsRoundresult")
  computerInfo.textContent = "Computer picked"

  gameRound++;
  displayScore();
  updateContendersPick([humanPick, computerPick], [humanChoice, computerChoice]);
  if(gameRound === 5) {
    showTheWinner(score.player, score.computer, score);
    resetTheScore();
    gameRound = 0;
  };
};

function updateContendersPick(elements, choices) {
  elements.forEach((element, index) => {
  const choice = choices[index];

  element.id = choice;
  element.style.width = "0"; 
  element.style.height = "0";
  element.style.opacity = "0"; 

  element.classList.add("jsContendersPick");

  element.offsetHeight; // This forces a reflow

  setTimeout(() => {
  element.style.width = "220px"; 
  element.style.height = "220px"; 
  element.style.opacity = "1"; 
  })

  if(element === humanPick) {
    playerPickContainer.appendChild(element);
  }else {
    computerPickContainer.appendChild(element);
  }
  });
};

function displayScore() {
  playerScore.textContent = score.player;
  computerScore.textContent = score.computer;
  draw.textContent = score.tie;
};
const newGame = document.querySelector("#newGame");

newGame.addEventListener("click", resetTheScore);

function resetTheScore() {
  roundInfoContainer.removeChild(playerPickContainer);
  roundInfoContainer.removeChild(roundResult);
  roundInfoContainer.removeChild(computerPickContainer);
  gameRound = 0
  score = { player: 0, computer: 0, tie: 0};
  displayScore()
};

function showTheWinner(playerFinalScore, computerFinalScore, scoreBoard) {   
  if(playerFinalScore > computerFinalScore) { 
    alert("Player wins!");
  }else if(playerFinalScore < computerFinalScore) {
    alert("Computer wins!");
  };
};
