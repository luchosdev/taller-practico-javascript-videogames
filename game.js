const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame() {
  game.fillRect(0, 50, 100, 100);
  //   game.clearRect(0, 0, 50, 50);
  // game.clearRect(0, 0, 50, 50);
}