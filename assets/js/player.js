class Player {
  //center position
  x = -30;
  y = 34;
  width = 107;
  height = 108;
  speed = {
    x: 0,
    y: 0,
  };

  // gravity
  verticalSpeed = 0;
  gravity = 0.1;

  // player Running image ............
  playerRunningImage;
  playerRunningImageSrc = 'assets/img/running-right.png';
  runWidth = 107;
  runHeight = 108;

  // player Running sprite
  runSprite = [0, 107, 214, 321];
  runFrame = 4;
  runSpriteCount = 0;

  // run boolean
  isRunning = true;

  // Keeps track of timers
  _start = {};

  // player falling image ..........
  playerFallingImage;
  playerFallingImageSrc = 'assets/img/falling-right.png';
  fallWidth = 107;
  fallHeight = 108;

  // player falling sprite
  fallSprite = [0, 107, 214];
  fallFrame = 3;
  fallSpriteCount = 0;

  // fall boolean
  isFalling = false;

  isStopped = false;

  // // Keeps track of timers
  // _start = {};

  // player sliding image ..........
  playerSlidingImage;
  playerSlidingImageSrc = 'assets/img/sliding-right.png';
  slideWidth = 107;
  slideHeight = 108;

  // player Sliding sprite
  slideSprite = [0, 107, 214, 321, 428, 535];
  slideFrame = 6;
  slideSpriteCount = 0;

  // fall boolean
  isSliding = false;

  // // Keeps track of timers
  // _start = {};

  constructor() {
    // Get the player running loaded
    this.playerRunningImage = new Image();
    this.playerRunningImage.src = this.playerRunningImageSrc;

    // Get the player falling loaded
    this.playerFallingImage = new Image();
    this.playerFallingImage.src = this.playerFallingImageSrc;

    // Get the player sliding loaded
    this.playerSlidingImage = new Image();
    this.playerSlidingImage.src = this.playerSlidingImageSrc;
  }

  // Player Along the Path Movement

  start() {
    var path =
      'M1 1C1 1 62.1562 56.1927 101.659 72.1468C141.162 88.1009 207 95 207 95'; // an SVG path


    // path.setAttribute('transform', 'translate(50,50)');
    var pathAnimator;
    var startFromPercent = 0; // start from 10% of the path
    var stopAtPercent = 90; // stop at 9 0% of the path (which will then call the onDone function callback)

    // initiate a new pathAnimator object
    pathAnimator = new PathAnimator(path, {
      duration: 5, // seconds that will take going through the whole path
      step: (point, angle) => {
        // do something every "frame" with: point.x, point.y & angle
        this.x = point.x;
        this.y = point.y;
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        this._draw();
      },
      easing: function (t) {
        return t * (2 - t);
      },
      onDone: finish(this),
    });

    pathAnimator.start(startFromPercent, stopAtPercent);

    function finish() {
      // do something when animation is done
    }
  }

  // player tick function
  tick(timestamp) {
    this.timestamp = timestamp;
    this._draw();

    this._verticalMovement();

    this._updateLocation();

    this._detectStatus();

    if (this.isFalling === true) {
      this._checkKeyPress();
    }

    console.log(this.isFalling, this.isStopped);
  }

  _checkKeyPress() {
    if (key.isDown(key.spaceBar)) {
      game.player.start();
      if (this.isStopped === false) {
        this.isStopped = true;
      } else {
        this.isStopped = false;
      }
      if (this.isSliding === true) {
        game.player.start();
      }
    }
    // game.player.start();
    // if (key.isUp(key.spaceBar)) {
    //   this.isStopped = false;
    // }
  }

  _verticalMovement() {
    // reset verticalSpeed
    //this._detectStatus();
    if (this.isFalling == true) {
      this.verticalSpeed += this.gravity;
    } else if (this.isRunning == true) {
      this.verticalSpeed = 0;
    }

    //stop the character
    if (this.isStopped === true) {
      this.verticalSpeed = 0;
    }

    this.y += this.verticalSpeed;
  }

  _angleToPixel(angle) {
    // 0º -> x=1, y=0
    // 45º -> x=1, y=1
    // 90º -> x=0, y=1
    //return {x: ?, y: ?};
  }

  _updateLocation() {
    if (this.x >= 30) {
      this.x = this.x + 0;
      //this.y += 1;
    } else {
      this.x += 1;
    }
  }

  _detectStatus() {
    const buildingTop = 142;
    const groundFloor = 600;
    var ropePosition = 200;

    // detect if the character is on the building top
    if (this.x < 30 && this.y + this.height == buildingTop) {
      this.isRunning = true;
      this.isFalling = false;
      this.isSliding = false;
    }

    if (this.x >= 30 && this.y + this.height >= buildingTop) {
      this.isRunning = false;
      this.isFalling = true;
      this.isSliding = false;
    }

    // detect if the character is near the ropes

    if (
      this.x >= 30 &&
      this.y > ropePosition - 20 &&
      this.y < ropePosition + 20
    ) {
      this.isRunning = false;
      this.isFalling = false;
      this.isSliding = true;
    }

    // if (this.x >= 30 && this.y + this.height > buildingTop) {
    //   // if (this.verticalSpeed == 0) {
    //   //   this.isRunning = true;
    //   //   this.isFalling = false;
    //   //   this.isSliding = false;
    //   // } else if (this.gravity == 0.1) {
    //   //   this.isFalling = true;
    //   //   this.isRunning = false;
    //   //   this.isSliding = false;
    //   // } else {
    //   //   this.isSliding = true;
    //   //   this.isRunning = false;
    //   //   this.isFalling = false;
    //   // }
    // }

    // check if the character is on the groundfloor
    if (this.y >= groundFloor) {
      this.isRunning = true;
      this.isFalling = false;
      this.isSliding = false;
    }
  }

  _draw() {
    // player is running
    if (this.isRunning === true) {
      this._drawRunning();
      this._fps(250, this._updateRunningCounter.bind(this));
    }
    // else {
    //   this._drawFalling();
    //   this._drawSliding();
    //   // this._fps(100, this._updateRunningCounter.bind(this));
    //   this._drawPlayerPath();
    // }
    // player is falling
    if (this.isFalling === true) {
      this._drawFalling();
      this._fps(250, this._updateFallingCounter.bind(this));
    }
    // player is Sliding
    if (this.isSliding === true) {
      this._drawSliding();
      this._fps(250, this._updateSlidingCounter.bind(this));
    }
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

  // draw falling animation
  _drawFalling() {
    ctx.drawImage(
      this.playerFallingImage,
      this.fallSprite[this.fallSpriteCount],
      0,
      107,
      108,
      this.x,
      this.y,
      this.fallWidth,
      this.fallHeight
    );
  }

  _updateFallingCounter() {
    this.isFalling = true;
    this.fallSpriteCount++;
    if (this.fallSpriteCount % this.fallSprite.length === 0) {
      this.fallSpriteCount = 0;
    }
  }

  // draw sliding animation
  _drawSliding() {
    ctx.drawImage(
      this.playerSlidingImage,
      this.slideSprite[this.slideSpriteCount],
      0,
      107,
      108,
      this.x,
      this.y + 20,
      this.slideWidth,
      this.slideHeight
    );
  }

  _updateSlidingCounter() {
    this.isSliding = true;
    this.slideSpriteCount++;
    if (this.slideSpriteCount % this.slideSprite.length === 0) {
      this.slideSpriteCount = 0;
    }
  }

  // utility
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
