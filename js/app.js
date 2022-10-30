function diceRoll() {
  const playerOneRoll = Math.ceil(Math.random() * 6);
  const playerTwoRoll = Math.ceil(Math.random() * 6);

  const playerOneDice = document.getElementById('dice-1');
  playerOneDice.setAttribute('src', '/img/SVG/dice-' + playerOneRoll + '.svg');

  const playerTwoDice = document.getElementById('dice-2');
  playerTwoDice.setAttribute('src', '/img/SVG/dice-' + playerTwoRoll + '.svg');

  if (playerOneRoll > playerTwoRoll) {
    document.querySelector('h1').innerText = 'Player 1 Wins!';
  } else if (playerTwoRoll > playerOneRoll) {
    document.querySelector('h1').innerText = 'Player 2 Wins!';
  } else if (playerOneRoll === playerTwoRoll) {
    document.querySelector('h1').innerText = "It's a Draw!";
  }
}

diceRoll();
