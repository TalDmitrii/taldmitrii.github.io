'use strict';

(function () {
  var swiper = new Swiper('.swiper-container', {
    effect: 'cube',
    grabCursor: true,
    loop: true,
    updateOnWindowResize: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
})();
