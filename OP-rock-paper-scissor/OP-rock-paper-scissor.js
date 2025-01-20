/* Odin project rock paper and scissor */

const humanMove = document.querySelector(".moves");

/* get the human move base on the target id */
humanMove.addEventListener("click", (event) => {
  let target = event.target;
  playRound(target.id);
});

/* get a moves from from 1 to 3 */
const computerMove = () => {
  const move = Math.floor(Math.random() * 3);
  if(move === 1) {return "rock"}
  else if(move === 2) {return "paper"}
  else {return "scissor"}
};

let possibleOutCome = {
  rock: {rock: "tie", paper: "you lose", scissor: "you win"},
  paper: {rock: "you win", paper: "tie", scissor: "you lose"},
  scissor : {rock: "you lose", paper: "you win", scissor: "tie"}
};

function playRound(humanChoice) {
  const computerChoice = computerMove();
  let scoreBoard = {
    player: 0,
    computer: 0,
    tie: 0
  };

  let result = possibleOutCome[humanChoice]?.[computerChoice] || "Invalid move";
  console.log(`${humanChoice} - ${computerChoice}\n\n${result}`);
  
  switch(result) {
    case "you win":
      scoreBoard.player++
      break;
    case "you lose":
      scoreBoard.computer++
      break;
    case "tie":
      scoreBoard.tie++
      break;
  };

  showTheWinner(scoreBoard.player, scoreBoard.computer, scoreBoard.tie);
};

function showTheWinner(playerScore, ComputerScore) {   
  if(playerScore > ComputerScore) {
    console.log("Player wins!");
  }else if(playerScore < ComputerScore) {
    console.log("Computer wins!");
  }else; {
    console.log("Draw!");
  }
};