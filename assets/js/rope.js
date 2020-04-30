class Rope {
  x = 0;
  y = 0;
  type = 1;

  images = [
    './assets/img/rope-1.png',
    './assets/img/rope-2.png',
    './assets/img/rope-3.png',
    './assets/img/rope-4.png',
    './assets/img/rope-5.png',
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
