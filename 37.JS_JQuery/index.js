new Swiper(".onwave-hero-swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new Swiper(".onwave-products-swiper", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 10,

  navigation: {
    nextEl: ".swiper-button-next-products",
    prevEl: ".swiper-button-prev-products",
  },
});

new Swiper(".onwave-partners-swiper", {
  loop: true,
  slidesPerView: 9,
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next-partners",
    prevEl: ".swiper-button-prev-partners",
  },
});
