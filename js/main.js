$(document).ready(function () {
  var mySwiper = new Swiper(".result-slide", {
    slidesPerView: 1.9,
    // slidesPerGroup: 0.5,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: ".result-slide__button_prev",
      prevEl: ".result-slide__button_next",
    },
  });

  $(window).scroll(function() {
    $('.mov').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+600) {
        $(this).addClass('animate__fadeInUp');
      }
    });
  });
});