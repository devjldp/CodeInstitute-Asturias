/* jshint esversion:8 */

window.addEventListener('DOMContentLoaded', () => {
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


  let btnG = document.getElementById("btn-hamburguer");
  let gTitle = document.getElementById("gallery-title")

  btnG.addEventListener('click', () => {
    gTitle.classList.toggle('mt-12vw');
  });
})