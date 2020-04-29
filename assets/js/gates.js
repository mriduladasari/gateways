class GreenGate {
  x = 60;
  y = 500;
  };

  imageSrc = 'assets/img/green-leftside-gate.png';
  width = 24;
  height = 124;

  img;

  constructor() {
    this.img = new Image();
    this.img.src = this.imageSrc;
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

}

