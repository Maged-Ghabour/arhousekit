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

// Scroll Animation
const sections = document.querySelectorAll('.section-hero, .section-ourWorks, .section-wordpress, .section-project-execution, .our__clients, .faq__section');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Enhanced FAQ Accordion
document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', function () {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      this.style.transform = 'scale(1)';
    } else {
      this.style.transform = 'scale(1.02)';
    }
  });
});
