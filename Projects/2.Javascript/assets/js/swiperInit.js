new Swiper(".monticello-header-swiper", {
  // effect: "fade",

  pagination: {
    el: ".monticello-header-swiper-pagination",
    clickable: true,
  },
});

new Swiper(".monticello-news-swiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 20,

  pagination: {
    el: ".monticello-news-swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
