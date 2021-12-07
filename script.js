// let playerSelection = prompt('Type your choice of rock, paper or scissors.');

let playerSelection = 'rock';

function computerPlay() {
  const rps = ['rock', 'paper', 'scissors'];

  //Returns a random integer from 0 to 2:
  let random = Math.floor(Math.random() * rps.length);

  //users randomfunction above to choose and return rock, paper, or scissors
  return rps[random];
}
let computerSelection = computerPlay();
console.log(computerSelection);
function playGame(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie");
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
    console.log(
      'You lose!' + computerSelection + 'beats' + playerSelection + '.'
    );
  } else {
    console.log(
      'You win!' + playerSelection + 'beats' + computerSelection + '.'
    );
    // console.log('You win!' + playerSelection+'beats' +comptuterSelection + '.');
  }
}

playGame(playerSelection, computerSelection);
