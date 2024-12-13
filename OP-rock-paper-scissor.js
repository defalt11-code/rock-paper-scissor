function getComputerChoice() {
  const randomNumber = Math.random();
  let computerChoice = '';

  if(randomNumber > 0 && randomNumber < 1 / 3) {
    computerChoice = 'rock';
  }else if(randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    computerChoice = 'paper';
  }else if(randomNumber > 2 / 3 && randomNumber < 1) {
    computerChoice = 'scissor';
  }

  return computerChoice;
}

function getHumanChoice() {
  const humanChoice = prompt('Enter your move: (rock, paper, scissor)')

  return humanChoice.toLowerCase();
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  let tie = 0;

  for(let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice()

    playRound(humanSelection, computerSelection)
  }

  console.log("Human score: " + humanScore); // Log final score
  console.log("Computer score: " + computerScore); // Log final score
  console.log("Ties: " + tie); // Log number of ties

  if(humanScore > computerScore) {
    return 'Humans wins!'
  }else {
    return 'Computer wins!'    
  }

  function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
      case "rock": 
        if(computerChoice === 'rock') {
          console.log("It's a tie! both player pick rock!");
          tie++;
        }else if(computerChoice === 'paper') {
          console.log('You lose! Paper beats Rock');
          computerScore++;
        }else if(computerChoice === 'scissor') {
          console.log('You win! Rock beats Scissor');
          humanScore++
        }
        break
      case "paper": 
        if(computerChoice === 'rock') {
          console.log('You win! Paper beats Rock');
          humanScore++;
        }else if(computerChoice === 'paper') {
          console.log("It's a tie! Both player pick paper!");
          tie++;
        }else if(computerChoice === 'scissor') {
          console.log('You lose! Scissor beats Paper');
          computerScore++;
        }
        break
      case "scissor": 
        if(computerChoice === 'rock') {
          console.log('You Lose! Rock beats Scissor');
          computerScore++;
        }else if(computerChoice === 'paper') {
          console.log('You Win! Scissor beats Paper');
          humanScore++;
        }else if(computerChoice === 'scissor'){
          console.log("It's a tie! Both player pick scissor");
          tie++;
        }
    }
  }


};

console.log(playGame());
