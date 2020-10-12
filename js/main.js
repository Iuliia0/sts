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

 
});