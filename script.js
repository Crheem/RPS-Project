// let playerSelection = prompt('Type your choice of rock, paper or scissors.');

//let playerSelection= 'Rock';

function playerSelection() {
  const rps = ['rock', 'paper', 'scissors'];

  //Returns a random integer from 0 to 2:
  let random = Math.floor(math.random() * rps.length);

  //users randomfunction above to choose and return rock, paper, or scissors
  return rps[random];
}
let computerSelection = computerPlay();

function playGame(playerSelection, computerSelection) {
  if (playerSelection == 'rock') {
    if (computerSelection == 'scissors') {
      return 'You Win! rock beats scissors!';
    } else if (computerSelection == 'paper') {
      return 'Loser! paper Beats rock';
    } else if (comptuterSelection == 'rock') {
      return "It's a Tie";
    } else {
      return 'Something Went Wrong';
    }
  }
  //paper Choice
  else if (playerSelection == 'paper') {
    if (computerSelection == 'rock') {
      return 'You Win! paper beats rock';
    } else if (computerSelection == 'scissors') {
      return 'You Lose! scissors beats paper';
    } else if (computerSelection == 'paper') {
      return "It's a Tie";
    } else {
      return 'Something Went Wrong';
    }
  }
  //scissors Choice
  else if (playerSelection == 'scissors') {
    if (computerSelection == 'paper') {
      return 'You win! scissors beat paper';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
      return 'You Lose! rock beats scissors';
    } else if (
      playerSelection == 'scissors' &&
      computerSelection == 'scissors'
    ) {
      return "It's a Tie";
    } else {
      return 'Something Went Wrong';
    }
  } else {
    return "That's not a valid choice";
  }
}

console.log(playGame(playerSelection(), computerSelection()));
