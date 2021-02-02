// DOM nodes
const scorePlayer = document.querySelector('.player-score');
const scoreComputer = document.querySelector('.computer-score');
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

  rockButton.addEventListener('click', () => {
    game('Rock');
  });
  paperButton.addEventListener('click', () => {
    game('Paper');
  });
  scissorsButton.addEventListener('click', () => {
    game('Scissors');
  });

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

function playRound(playerSelection, computerSelection) {
  let log = '';

  if (playerSelection === 'Rock') {
    if (computerSelection === 'Paper') {
      log = 'You Lose!';
    } else if (computerSelection === 'Scissors') {
      log = 'You Win!';
    } 

    } else if (playerSelection === 'Paper') {
    if (computerSelection === 'Scissors') {
      log = 'You Lose!';
    } else if (computerSelection === 'Rock') {
      log = 'You Win!';
    }
    } else if (playerSelection === 'Scissors') {
    if (computerSelection === 'Rock') {
      log = 'You Lose!';
    } else if (computerSelection === 'Paper') {
      log = 'You Win!';
    } 
  }

  return log;
}
  
  function game(playerSelect) {
    let playerSelection = playerSelect;
    let computerSelection = computerPlay();
  
    let roundResult = playRound(playerSelection, computerSelection);
  
    if (roundResult.search('You Win!') > -1) {
      playerScore++;
    } else if (roundResult.search('You Lose!') > -1) {
      computerScore++;
    }
  
    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;
  }
  
