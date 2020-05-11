class Gate {
  x = 0;
  y = 0;
  type = 1;

  images = [
    './assets/img/green-leftside-gate.png',
    './assets/img/pink-leftside-gate.png',
    './assets/img/purple-rightside-gate.png',
  ];

  image;
  imageSrc;

  constructor(options = { type: 1, x: 0, y: 0 }) {
    this.type = options.type - 1;
    this.x = options.x || this.x;
    this.y = options.y || this.y;

    this.image = new Image();
    this.image.onload = () => {
      this._draw();
    };
    this.image.src = this.images[this.type];
  }

  tick() {
    this._draw();
  }

  _draw() {
    ctx.drawImage(this.image, this.x, this.y);
  }
}

// class Dog extends Animal {
//   speak() {
//     console.log(`${this.name} says, "Woof woof!"`);
//   }

//   fetch() {
//     console.log('I got the toy! Throw it again!');
//   }
// }
