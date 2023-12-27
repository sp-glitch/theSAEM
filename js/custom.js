window.addEventListener("scroll", () => {
  let SCT = window.scrollY;
  SCT > 0
    ? document.querySelector("#Header").classList.add("on")
    : document.querySelector("#Header").classList.remove("on");
});

var swiper = new Swiper(".main_slide_wrap", {
  spaceBetween: 30,
  effect: "fade",

  loop: true,
  speed: 1000,

  navigation: {
    nextEl: ".swiper-button-n",
    prevEl: ".swiper-button-p",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    // delay: 1000,
    disableOnInteraction: false,
  },
});

$(function () {
  $(".mopen").on("click", function () {
    $(".gnb").toggleClass("on");
    $(this).find(".hamburger").toggleClass("is-active");
  });
});
