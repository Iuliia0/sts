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

    var tabsItem = $(".services-offers__item");
  var contentItem = $(".services-offers__block");

    tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("services-offers__item_active");
    contentItem.removeClass("services-offers__block_active");
    $(activeContent).addClass("services-offers__block_active");
    $(this).addClass("services-offers__item_active");
  });

var scrollPos = 0;
$(window).scroll(function(){
   var st = $(this).scrollTop();
   if (st > scrollPos){
     $('.customers__block_1').animate({ "backgroundPosition": "-=3px" }, 30);
     $('.customers__block_2').animate({ "backgroundPosition": "+=3px" }, 30);
     $('.customers__block_3').animate({ "backgroundPosition": "-=3px" }, 30);

   } else {
     $('.customers__block_1').animate({ "backgroundPositionX": "+=3px" }, 30);
          $('.customers__block_2').animate({ "backgroundPosition": "-=3px" }, 30);
     $('.customers__block_3').animate({ "backgroundPosition": "+=3px" }, 30);
   }
   scrollPos = st;
});

  });
