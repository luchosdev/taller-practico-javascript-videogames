const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

const conteoJuego = document.querySelector('#conteoJuego');
const numberConteo = document.querySelector('#numberConteo');

const finishGame = document.querySelector('#finishGame');
const loseVida = document.querySelector('#loseVida');
const estado = document.querySelector('#estado');
const gameRestart = document.querySelector('#gameRestart');
const finishTime = document.querySelector('#finishTime');
const pTime = document.querySelector('#pTime');
const pRecord = document.querySelector('#pRecord');

const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');

const spanLives = document.querySelector('#lives');
const spanTime = document.querySelector('#time');
const spanRecord = document.querySelector('#record');
const pResult = document.querySelector('#result');

const botonReiniciar = document.querySelector('#reset');

let canvasSize;
let elementsSize;
let level = 0;
let lives = 3;

let timeStart;
let timePlayer;
let timeInterval;

const playerPosition = {
  x: undefined,
  y: undefined,
};

const giftPosition = {
  x: undefined,
  y: undefined,
};

let enemyPositions = [];

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.7;
  } else {
    canvasSize = window.innerHeight * 0.7;
  }

  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);

  elementsSize = canvasSize / 10;

  playerPosition.x = undefined;
  playerPosition.y = undefined;

  startGame();
}

function startGame() {
  game.font = elementsSize + 'px Verdana';
  game.textAlign = 'end';

  const map = maps[level];

  if (!map) {
    gameWin();
    return;
  }

  const mapRows = map.trim().split('\n');
  const mapRowCols = mapRows.map((row) => row.trim().split(''));

  showLives();

  enemyPositions = [];
  game.clearRect(0, 0, canvasSize, canvasSize);

  mapRowCols.forEach((row, rowI) => {
    row.forEach((col, colI) => {
      const emoji = emojis[col];
      const posX = elementsSize * (colI + 1.2);
      const posY = elementsSize * (rowI + 0.85);

      if (col == 'O') {
        if (!playerPosition.x && !playerPosition.y) {
          playerPosition.x = posX;
          playerPosition.y = posY;
        }
      } else if (col == 'I') {
        giftPosition.x = posX;
        giftPosition.y = posY;
      } else if (col == 'X') {
        enemyPositions.push({
          x: posX,
          y: posY,
        });
      }

      game.fillText(emoji, posX, posY);
    });
  });

  botonReiniciar.addEventListener('click', reiniciarJuego);

  movePlayer();
}

function movePlayer() {
  const giftCollisionX = playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3);
  const giftCollisionY = playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3);
  const giftCollision = giftCollisionX && giftCollisionY;

  if (giftCollision) {
    levelWin();
  }

  const enemyCollision = enemyPositions.find((enemy) => {
    const enemyCollisionX = enemy.x.toFixed(3) == playerPosition.x.toFixed(3);
    const enemyCollisionY = enemy.y.toFixed(3) == playerPosition.y.toFixed(3);
    return enemyCollisionX && enemyCollisionY;
  });

  if (enemyCollision) {
    showCollision();
    setTimeout(levelFail, 10);
  }

  game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);
}

function levelWin() {
  level++;
  startGame();
}

function levelFail() {
  lives--;

  if (lives <= 0) {
    level = 0;
    lives = 3;
    timeStart = undefined;
    modalFinish();
    estado.innerHTML = 'GAME OVER 🤬';
    pTime.classList.add('d-none');
    pRecord.classList.add('d-none');
  }

  playerPosition.x = undefined;
  playerPosition.y = undefined;

  startGame();
}

function modalFinish() {
  finishGame.classList.add('active');
  gameRestart.addEventListener('click', () => {
    location.reload();
    finishGame.classList.remove('active');
  });
}

function gameWin() {
  clearInterval(timeInterval);
}

function recordWin() {
  const recordTime = localStorage.getItem('record_time');
  const playerTime = Date.now() - timeStart;
  if (recordTime) {
    if (recordTime >= playerTime) {
      localStorage.setItem('record_time', playerTime);
      pResult.innerHTML = 'SUPERASTE EL RECORD! 🥳️';
      estado.innerHTML = '😎';
      finishTime.innerHTML = playerTime;
    } else {
      pResult.innerHTML = 'Lo siento, no superaste el record 😢';
      finishTime.innerHTML = playerTime;
      estado.innerHTML = '😫';
    }
  } else {
    localStorage.setItem('record_time', playerTime);
    pResult.innerHTML = 'A por un RECORD! 😉';
  }
}

function showLives() {
  const heartsArray = Array(lives).fill(emojis['HEART']);

  spanLives.innerHTML = '';
  heartsArray.forEach((heart) => spanLives.append(heart));
}

function showTime() {
  spanTime.innerHTML = Date.now() - timeStart;
}

function showRecord() {
  spanRecord.innerHTML = localStorage.getItem('record_time');
}

// Conteo antes de iniciar el juego
let conteoAtras = 3;
let i = setInterval(function () {
  numberConteo.innerHTML = conteoAtras;
  conteoAtras--;
  if (conteoAtras < 0) {
    clearInterval(i);
    conteoJuego.classList.add('d-none');
    tiempoYa();

    window.addEventListener('keydown', moveByKeys);
  }
}, 1500);

function tiempoYa() {
  if (!timeStart) {
    timeStart = Date.now();
    timeInterval = setInterval(showTime, 100);
    showRecord();
  }
}

function reiniciarJuego() {
  location.reload();
}

function modalLose() {
  loseVida.classList.add('active');
  setTimeout(function () {
    loseVida.classList.remove('active');
  }, 1000);
}

function showCollision() {
  game.clearRect(0, 0, canvasSize, canvasSize);
  game.font = '14px Verdana';
  game.textAlign = 'center';
  if (lives > 1) {
    modalLose();
  }
}

window.addEventListener('keydown', moveByKeys);
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveByKeys(event) {
  if (event.key == 'ArrowUp') {
    moveUp();
  } else if (event.key == 'ArrowDown') {
    moveDown();
  } else if (event.key == 'ArrowLeft') {
    moveLeft();
  } else if (event.key == 'ArrowRight') {
    moveRight();
  }
}

function moveUp() {
  if (playerPosition.y < elementsSize) {
  } else {
    playerPosition.y -= elementsSize;
    startGame();
  }
}

function moveLeft() {
  if (playerPosition.x - elementsSize < elementsSize) {
  } else {
    playerPosition.x -= elementsSize;
    startGame();
  }
}

function moveRight() {
  if (playerPosition.x > canvasSize) {
  } else {
    playerPosition.x += elementsSize;
    startGame();
  }
}

function moveDown() {
  if (playerPosition.y + elementsSize > canvasSize) {
  } else {
    playerPosition.y += elementsSize;
    startGame();
  }
}
