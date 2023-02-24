var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    slidesPerGroup: 2,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      mousewheel: true,
      keyboard: true,
    // breakpoints: {
    //     769: {
    //       slidesPerView: 2,
    //       slidesPerGroup: 2,
    //     },
    //   },
  });