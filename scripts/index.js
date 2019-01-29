'use strict';

$('#slideshow > .slideshow__item:gt(0)').hide();

setInterval(function() {
  $('#slideshow > .slideshow__item:first')
    .fadeOut(3000)
    .next()
    .fadeIn(3000)
    .end()
    .appendTo('#slideshow');
},  15000);

$("body").on('click', '[href*="#"]', function(e){
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top}, 1000);
  e.preventDefault();
});
