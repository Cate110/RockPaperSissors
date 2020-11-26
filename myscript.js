let playerScore = 0;
let computerScore = 0;

// Game Logic
function computerPlay (){
    function random(number) {
        return Math.floor(Math.random() * number + 1);
      }

    let computerNumber = random(3);
    let computerGuess = '';
  
    switch (computerNumber) {
      case 1:
        computerGuess = 'Rock';
        break;
      case 2:
        computerGuess = 'Paper';
        break;
      case 3:
        computerGuess = 'Scissors';
        break;
      default:
        break;
    }
  
    return computerGuess;
}

function playRound (playerSelection, computerSelection){
    playerSelection.toLowerCase();
    computerSelection.toLowerCase();
    let log = '';

    if (playerSelection === computerSelection){
        return log = 'Is a tie!';

    }else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
              playerSelection === 'scissors' && computerSelection === 'paper' ||
              playerSelection === 'paper' && computerSelection === 'rock') {
                 return log = 'You Win!';

    }else if (playerSelection === 'rock' && computerSelection === 'paper' ||
              playerSelection === 'scissors' && computerSelection === 'rock' ||
              playerSelection === 'paper' && computerSelection === 'scissors') {
                 return log = 'You Lose!';

    }else {
        return log = 'What?';
    }

    return log; 
}

let roundResult = playRound (playerSelection, computerSelection);

if (roundResult.search('You Win!') > -1) {
  playerScore++;
} else if (roundResult.search('You Lose!') > -1) {
  computerScore++;
}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
