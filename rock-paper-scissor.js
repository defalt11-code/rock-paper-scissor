function computerPick() {
  let randomNumber = Math.random();
  let computerMove = '';

  if(randomNumber > 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  }else if(randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  }else if(randomNumber > 2 / 3 && randomNumber < 1) {
    computerMove = 'scissor';
  }

  return computerMove;
}


function playGame(playerMove) {
  let computerMove = computerPick();  
  let result = '';

  if(playerMove === 'rock') {

    if(computerMove === 'rock') {
      result = 'tie';
    }else if(computerMove === 'paper') {
      result = 'you lose';
    }else if(computerMove === 'scissor') {
      result = 'you win';
    }

  }

  if(playerMove === 'paper') {

    if(computerMove === 'rock') {
      result = 'you win';
    }else if(computerMove === 'paper') {
      result = 'tie';
    }else if(computerMove === 'scissor') {
      result = 'you win';
    }

  }

  if(playerMove === 'scissor') {

    if(computerMove === 'rock') {
      result = 'you lose';
    }else if(computerMove === 'paper') {
      result = 'you win';
    }else if(computerMove === 'scissor') {
      result = 'tie';
    }

  }

  console.log(`You pick: ${playerMove} - ${computerMove}: Computer pick\n ${result}`);

}