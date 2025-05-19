var swiper = new Swiper(".swiperPartner", {
  slidesPerView: 6,
  spaceBetween: 20,
  sliderPerGroup: 6,
  loop: true,
  centerSlide: "true",
  grabCursor: "true",
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination1",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    350: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 5,
    },
  },
});

var swiperWorks = new Swiper(".swiperWorks", {
  slidesPerView: 6,
  spaceBetween: 0,
  sliderPerGroup: 6,
  loop: true,
  centerSlide: "true",
  grabCursor: "true",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination2",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    350: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 5,
    },
  },
});

var swiperClients = new Swiper(".swiperClients", {
  slidesPerView: 6,
  spaceBetween: 20,
  sliderPerGroup: 6,
  loop: true,
  centerSlide: "true",
  // grabCursor: "true",
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination3",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    350: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 3,
    },
  },
});
