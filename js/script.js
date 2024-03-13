var swiper = new Swiper(".watch-slider-contnr", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // breakpoints:{
  //   0: {
  //     slidesPerView: 1,
  //     slidesPerGroup: 1,
  //   },
  //   520: {
  //     slidesPerView: 0,
  //     slidesPerGroup: 0,
  //   },
  // }
});
