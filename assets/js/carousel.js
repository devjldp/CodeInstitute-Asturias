new Swiper('#swiper-2', {
  centeredSlides: true,
  spaceBetween: 10,
  lazyLoading: true,
  loop: true,
  keyboard: {
    enabled: true
  },
  autoplay: {
    delay: 9000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 1.5,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
})