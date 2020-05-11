// let level1 = new Background();
class Game {
  constructor(id) {
    this.background = new Background();
    this.player = new Player();

    this.firstRope = new Rope({
      type: 1,
      x: 62,
      y: 200,
    });

    this.secondRope = new Rope({ type: 2, x: 62, y: 310 });
    this.thirdRope = new Rope({ type: 3, x: 62, y: 350 });
    this.forthRope = new Rope({ type: 4, x: 62, y: 450 });
    this.fifthRope = new Rope({ type: 5, x: 62, y: 475 });

    this.greengate = new Gate({ type: 1, x: 268, y: 550 });
    this.pinkgate = new Gate({ type: 2, x: 268, y: 200 });
    this.purplegate = new Gate({ type: 3, x: 36, y: 400 });
  }

  gameFail() {
    console.log('You lost');
  }

  gameSuccess() {
    console.log('You win');
  }

  tick(timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.background.draw();
    this.firstRope.tick();
    this.secondRope.tick();
    this.thirdRope.tick();
    this.forthRope.tick();
    this.fifthRope.tick();

    this.greengate.tick();
    this.pinkgate.tick();
    this.purplegate.tick();

    this.player.tick(timestamp);

    // End Game
    if (isGameOver == true) {
      this.gameFail();
      return;
    } else if (isGameWin == true) {
      this.gameSuccess();
      return;
    }

    window.requestAnimationFrame(this.tick.bind(this));
  }
}

