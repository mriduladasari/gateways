class Background {
  // position
  x = 0;
  y = 0;

  // size
  width = 330;
  height = 700;

  // image
  image;
  imageSrc = './assets/img/fire-stage-1.jpg';

  constructor() {
    this.image = new Image();
    this.image.src = this.imageSrc;
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
