const rps = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('input');

for (let i = 0; i < buttons.length; i++) {
  let playerSelection = buttons[i].value;
  buttons[i].addEventListener('click', function () {
    playGame(playerSelection, rps[Math.floor(Math.random() * rps.length)]);
  });
}

function playGame(playerSelection, computerSelection) {
  let result;
  if (playerSelection === computerSelection) {
    result = 'Computer chose ' + computerSelection + "<br>It's a tie.";
    document.getElementById('result').innerHTML = result;
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
    result =
      'Computer chose ' +
      computerSelection +
      '.<br>You lose! ' +
      computerSelection +
      ' beats ' +
      playerSelection +
      '.';
    document.getElementById('result').innerHTML = result;
  } else {
    result =
      'Computer chose ' +
      computerSelection +
      '.' +
      '<br>You win! ' +
      playerSelection +
      ' beats ' +
      computerSelection +
      '.';
    return (document.getElementById('result').innerHTML = result);
  }
}
