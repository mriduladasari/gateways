const canvas = document.querySelector('.world');
const ctx = canvas.getContext('2d');
const game = new Game();

let runningRight;

let level_1 = new Game();

function init() {
  runningRight = new Sprite({
    frameCount: 4,
    src: 'assets/img/running-right.png',
  });

  runningRight.onload = () => {
    runningRight.draw();
  };

  update();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //   game.background.draw();

  // Move to center
  //   runningRight.x = (canvas.width - runningRight.width) / 2;
  //   runningRight.y = (canvas.height - runningRight.height) / 2;

  level_1.background.draw();
  runningRight.draw();
  runningRight.nextFrame();

  window.requestAnimationFrame(update);
}

init();
