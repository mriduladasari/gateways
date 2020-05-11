let isGameOver = false;
let isGameWin = false;

// Starting Game
let startScreen = document.getElementById('start-screen');
let startButton = document.getElementById('start-button');
startButton.addEventListener('click', startGame);

// startScreen.style.display = 'none';

function startGame() {
  // game.player.start();
  game.tick();
  // startTimer();
  startScreen.style.display = 'none';
  openingAudio.volume = 0.05;
  openingAudio.play();
  bgAudio.pause();
}

function beginning() {
  bgAudio.volume = 0.2;
  bgAudio.play();
}

// Audios
let openingAudio = document.createElement('audio');
openingAudio.src = 'assets/audio/opening.mp3';

let bgAudio = document.createElement('audio');
bgAudio.src = 'assets/audio/bg.mp3';

beginning();
