class Player {
  //center position
  x = 0;
  y = 0;
  width = 107;
  height = 108;
  speed = {
    x: 0,
    y: 0,
  };

  // player walking image
  playerRunningImage;
  playerRunningImageSrc = 'assets/img/running-right.png';
  runWidth = 107;
  runHeight = 108;

  // player walking sprite
  runSprite = [0, 107, 214, 321];
  runFrame = 4;
  runSpriteCount = 0;

  // run boolean
  isRunning = true;

  // Keeps track of timers
  _start = {};

  // player falling image
  playerFallingImage;
  playerFallingImageSrc = 'assets/img/falling-right.png';
  fallWidth = 107;
  fallHeight = 108;

  // player falling sprite
  fallSprite = [0, 107, 214];
  fallFrame = 3;
  fallSpriteCount = 0;

  // fall boolean
  isFalling = true;

  // Keeps track of timers
  _start = {};

  constructor() {
    this.playerRunningImage = new Image();
    this.playerRunningImage.src = this.playerRunningImageSrc;

    this.playerFallingImage = new Image();
    this.playerFallingImage.src = this.playerFallingImageSrc;
  }

  // player tick function
  tick(timestamp) {
    this.timestamp = timestamp;
    this._draw();
  }

  _draw() {
    // player is running
    if (this.isRunning === true) {
      this._drawRunning();
      this._fps(25, this._updateRunningCounter.bind(this));
    }
    // else {

    //     this._drawSight();
    //     this._drawWalking();
    //     this._fps(100, this._updateWalkingCounter.bind(this));
    //     this._drawPlayerPath();
    // }
  }

  // draw running animation
  _drawRunning() {
    ctx.drawImage(
      this.playerRunningImage,
      this.runSprite[this.runSpriteCount],
      0,
      107,
      108,
      this.x,
      this.y,
      this.runWidth,
      this.runHeight
    );
  }

  _updateRunningCounter() {
    this.isRunning = true;
    this.runSpriteCount++;
    if (this.runSpriteCount % this.runSprite.length === 0) {
      this.runSpriteCount = 0;
    }
  }

  _fps(fps, callback) {
    let functionName = callback.name;
    if (functionName.indexOf('bound ') >= 0) {
      functionName = functionName.split('bound ').pop();
    }

    if (!this._start[functionName]) {
      this._start[functionName] = this.timestamp;
    }

    const diff = this.timestamp - this._start[functionName];

    if (diff >= fps) {
      callback();
      delete this._start[functionName];
    }
  }
}
