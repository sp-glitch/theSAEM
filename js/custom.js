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

  $(".product_slide").slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  })

  $('.main_product .arrows .left').on('click', function(){
    // 슬라이드가 뒤로 가: slick 홈페이지 참조
    $('.product_slide').slick('slickPrev')
})


$('.main_product .arrows .right').on('click', function(){
    // 슬라이드가 뒤로 가: slick 홈페이지 참조
    $('.product_slide').slick('slickNext')
});
});
