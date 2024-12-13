const moves = ['rock', 'paper', 'scissor'];

//Get a random move 
const getRandomMove = (moves) => moves[Math.floor(Math.random() * moves.length)];

//Map for possible outcome
let  possibleOutcome= {
  rock: {rock: 'tie', paper: 'you lose', scissor: 'you win'},
  paper: {rock: 'you win', paper: 'tie', scissor: 'you lose'},
  scissor: {rock: 'you lose', paper: 'you lose', scissor: 'tie'}
};

//This function determine the winner of the game
function playGame(playerMove) {
  const computerMove = getRandomMove(moves);
  
  let result = possibleOutcome[playerMove]?.[computerMove] || 'Invalid Move';

  console.log(`You ${playerMove} - ${computerMove} Computer pick\n${result}`);
};


function funcOne() {
  let data = 0;

  function funcTwo() {
    data++;
  }
}




