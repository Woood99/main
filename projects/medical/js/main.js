"use strict";

console.log('global');
"use strict";

var benefitsTab = document.querySelectorAll('.benefits__tab');
var benefitsItem = document.querySelectorAll('.benefits__item');

function onTabClick(item) {
  item.addEventListener('click', function () {
    var currentBtn = item;
    var tabId = currentBtn.getAttribute('data-tab');
    var currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('active')) {
      benefitsTab.forEach(function (item) {
        item.classList.remove('active');
      });
      benefitsItem.forEach(function (item) {
        item.classList.remove('active');
      });
      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
}

benefitsTab.forEach(onTabClick);
document.querySelector('.benefits__tab:nth-child(1)').click();
"use strict";

var burger = document.querySelector('.burger');
var navList = document.querySelector('.nav__list');
var body = document.querySelector('body');
burger.addEventListener('click', function (e) {
  e.currentTarget.classList.toggle('burger--active');
  navList.classList.toggle('nav__list--active');
  body.classList.toggle('no-scroll');
});
document.addEventListener('click', function (e) {
  if (navList.classList.contains('nav__list--active')) {
    if (!e.target.closest('.header')) {
      burger.classList.remove('burger--active');
      navList.classList.remove('nav__list--active');
      body.classList.remove('no-scroll');
    }
  }
}); // if (burger.contains('burger--active')) {
//     document.addEventListener('click', () => {
//         if (!burger.contains('burger--active')) {
//             console.log('da');
//         } else {
//             console.log('net');
//         }
//     });
// }
"use strict";

console.log('maxgraph');
"use strict";

var width = window.innerWidth >= 1050;

if (width === true) {
  var header = document.querySelector('.header__main');
  var hero = document.querySelector('.hero');
  var headerHeight = header.offsetHeight;
  var heroHeight = hero.offsetHeight;
  var lastScrollTop = 0;
  var headerFixed = document.querySelector('.header__main--fixed');
  window.addEventListener('scroll', function () {
    var scrollDistance = window.scrollY;

    if (scrollDistance >= headerHeight + 50) {
      header.classList.add('header__main--position-fixed');
      hero.style.marginTop = "".concat(headerHeight, "px");
    } else if (scrollDistance <= headerHeight + 50) {
      header.classList.remove('header__main--position-fixed');
      hero.style.marginTop = null;
    }

    if (scrollDistance >= headerHeight + heroHeight - 150) {
      header.classList.add('header__main--opacity');
    } else if (scrollDistance <= headerHeight + heroHeight - 150) {
      header.classList.remove('header__main--opacity');
    }

    if (scrollDistance >= heroHeight + headerHeight + 50) {
      header.classList.add('header__main--fixed');
    } else if (scrollDistance <= heroHeight + headerHeight + 50) {
      header.classList.remove('header__main--fixed');
    }
  });
}
"use strict";

var heroSlider = document.querySelector('.hero__swiper');
var myHeroSwiper = new Swiper(heroSlider, {
  slidesPerView: 1,
  spaceBetween: 5,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  loop: true,
  slideToClickedSlide: true,
  centeredSlides: true
});
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
