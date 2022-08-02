new Swiper('.swiper', {
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
  // autoplay: {
  //   // Длительность слайда
  //   delay: 6000,
  //   // Отключить после ручного перекл
  //   disableOnInteraction: false, 
  // },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  }
});