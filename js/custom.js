var swiper = new Swiper(".main_slide_wrap", {
  spaceBetween: 30,
  effect: "fade",

  loop: true,
  speed: 2000,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
});

$(function(){
  $(".mopen").on("click", function () {
    $("#gnb").toggleClass("on");
    $(".mopen").toggleClass("on");
    $(this).toggleClass("on");
  });
});