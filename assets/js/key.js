class Key {
  _pressed = {};

  spaceBar = 32;

  //   HOOK = ;

  isDown(keyCode) {
    return this._pressed[keyCode];
  }

  onKeydown(event) {
    this._pressed[event.keyCode] = true;
  }

  onKeyup(event) {
    delete this._pressed[event.keyCode];
  }
}

const key = new Key();

window.addEventListener(
  'keyup',
  function (event) {
    key.onKeyup(event);
  },
  false
);

window.addEventListener(
  'keydown',
  function (event) {
    key.onKeydown(event);
  },
  false
);

