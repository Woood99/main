"use strict";

console.log('global');
"use strict";

var burger = document.querySelector('.burger');
var navList = document.querySelector('.header__nav-list');
var mobileOverlay = document.querySelector('.mobile--overlay');
var body = document.querySelector('body');
burger.addEventListener('click', function (e) {
  e.currentTarget.classList.toggle('burger--active');
  navList.classList.toggle('header__nav-list--active');
  mobileOverlay.classList.toggle('overlay--visible');
  body.classList.toggle('no-scroll');
});
mobileOverlay.addEventListener('click', function (e) {
  e.currentTarget.classList.remove('overlay--visible');
  navList.classList.remove('header__nav-list--active');
  burger.classList.remove('burger--active');
  body.classList.remove('no-scroll');
});
"use strict";

console.log('maxgraph');
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
