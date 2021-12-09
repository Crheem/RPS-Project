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

function playGame(playerSelection, computerSelection) {
  let result;
  if (playerSelection === computerSelection) {
    result = 'Computer chose ${computerSelection}.<br> It's a tie.'
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
    result = 'Computer chose ${computerSelection},<br> You lose! ${computerSelection} beats $ {playerSelection}.';

  } else {
    result ='Computer chose $ {computerSelcection}.<br> You win! ${playerSelection} beats $ {computerSelcection}.';
     
document.getElementById('result').innerHTML = result;

const buttons = document.querySelectorAll('input');
for (let i = 0; i< buttons.length; i++){
  buttons[i].addEventListener('click', function(){
    playGame(buttons[i].value, computerSelection);
  });
}