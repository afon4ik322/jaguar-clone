new Swiper('.top-swiper', {
  // Стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // Навигация
  // Буллеты, текущее положение, прогрессбар
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true, // Стиль курсора
  loop: true,
  autoplay: {
    // Длительность слайда
    delay: 6000,
    // Отключить после ручного перекл
    disableOnInteraction: false, 
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  }
});

new Swiper('.bottom-swiper', {
  // Стрелки
  navigation: {
    nextEl: '.bottom-swiper-button-next',
    prevEl: '.bottom-swiper-button-prev'
  },
  // Навигация
  // Буллеты, текущее положение, прогрессбар
  pagination: {
    el: '.bottom-swiper-pagination',
    clickable: true,
  },
  grabCursor: true, // Стиль курсора
  slidesPerView: 3,
  spaceBetween: 40,
  slidesPerGroup: 3,
  breakpoints: {
    900: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
});
