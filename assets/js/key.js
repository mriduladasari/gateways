// class Key {
//   _pressed = {};

//   LEFT = 65;
//   UP = 87;
//   RIGHT = 68;
//   DOWN = 83;

//   isDown(keyCode) {
//     return this._pressed[keyCode];
//   }

//   onKeydown(event) {
//     this._pressed[event.keyCode] = true;
//   }

//   onKeyup(event) {
//     delete this._pressed[event.keyCode];
//   }
// }

// const key = new Key();

// window.addEventListener(
//   'keyup',
//   function (event) {
//     key.onKeyup(event);
//   },
//   false
// );

// window.addEventListener(
//   'keydown',
//   function (event) {
//     key.onKeydown(event);
//   },
//   false
// );

// // keys
// // _checkKeys(event) {
// //     const key = event.key.toLowerCase();

// //     if (this.isAnimating) {
// //         return;
// //     }

// //     if (key === 'w') {
// //         this.isHighAttack = true;
// //         this.isMidAttack = false;
// //         this.isLowAttack = false;

// //     } else if (key === 's') {
// //         this.isHighAttack = false;
// //         this.isMidAttack = false;
// //         this.isLowAttack = true;

// //     } else if (key === 'd') {
// //         this.isHighAttack = false;
// //         this.isMidAttack = true;
// //         this.isLowAttack = false;
// //     }
// // }
