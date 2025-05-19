const h1 = document.querySelector(".heading-primary");

///////////////////////////////////////////////////////////
// Set current year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

// const allLinks = document.querySelectorAll("a:link");

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");

//     // Scroll back to top
//     if (href === "#")
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });

//     // Scroll to other links
//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }

//     // Close mobile naviagtion
//     if (link.classList.contains("main-nav-link"))
//       headerEl.classList.toggle("nav-open");
//   });
// });

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

/*************************************/
document.addEventListener("DOMContentLoaded", function () {
  const snowContainer = document.querySelector(".snow-container");

  const particlesPerThousandPixels = 0.1;
  const fallSpeed = 1.25;
  const pauseWhenNotActive = true;
  const maxSnowflakes = 200;
  const snowflakes = [];

  let snowflakeInterval;
  let isTabActive = true;

  function resetSnowflake(snowflake) {
    const size = Math.random() * 5 + 1;
    const viewportWidth = window.innerWidth - size; // Adjust for snowflake size
    const viewportHeight = window.innerHeight;

    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * viewportWidth}px`; // Constrain within viewport width
    snowflake.style.top = `-${size}px`;

    const animationDuration = (Math.random() * 3 + 2) / fallSpeed;
    snowflake.style.animationDuration = `${animationDuration}s`;
    snowflake.style.animationTimingFunction = "linear";
    snowflake.style.animationName =
      Math.random() < 0.5 ? "fall" : "diagonal-fall";

    setTimeout(() => {
      if (parseInt(snowflake.style.top, 10) < viewportHeight) {
        resetSnowflake(snowflake);
      } else {
        snowflake.remove(); // Remove when it goes off the bottom edge
      }
    }, animationDuration * 1000);
  }

  function createSnowflake() {
    if (snowflakes.length < maxSnowflakes) {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflakes.push(snowflake);
      snowContainer.appendChild(snowflake);
      resetSnowflake(snowflake);
    }
  }

  function generateSnowflakes() {
    const numberOfParticles =
      Math.ceil((window.innerWidth * window.innerHeight) / 1000) *
      particlesPerThousandPixels;
    const interval = 5000 / numberOfParticles;

    clearInterval(snowflakeInterval);
    snowflakeInterval = setInterval(() => {
      if (isTabActive && snowflakes.length < maxSnowflakes) {
        requestAnimationFrame(createSnowflake);
      }
    }, interval);
  }

  function handleVisibilityChange() {
    if (!pauseWhenNotActive) return;

    isTabActive = !document.hidden;
    if (isTabActive) {
      generateSnowflakes();
    } else {
      clearInterval(snowflakeInterval);
    }
  }

  generateSnowflakes();

  window.addEventListener("resize", () => {
    clearInterval(snowflakeInterval);
    setTimeout(generateSnowflakes, 1000);
  });

  document.addEventListener("visibilitychange", handleVisibilityChange);
});
