$(document).ready(function () {
  console.log("ready!");
  scrollHeader();
  animationTitle();
  swiperHotels();
  swiperRestaurant();
  swiperOffer();
  cruise();
  testimonial();
});

function scrollHeader() {
  gsap.registerPlugin(ScrollTrigger);
  let height = $(".header__active").height() * -1;
  function initializeScrollTrigger() {
    navTop = gsap
      .from(".header__active", {
        y: height,
        paused: true,
        duration: 0.5,
        ease: "power1.out",
        trigger: "header",
      })
      .progress(1);

    ScrollTrigger.create({
      // start: "top top",
      start: "30vh top",
      end: 99999,
      onUpdate: (self) => {
        // Shrink navTop
        self.direction === -1 ? navTop.play() : navTop.reverse();
        // self.refresh();
        if (self.direction === -1) {
          $(".header__default").removeClass("scrolled-down");
        } else {
          $(".header__default").addClass("scrolled-down");
        }
      },
    });
  }

  initializeScrollTrigger();

  // Re-initialize ScrollTrigger when page is refreshed
  $(window).on("load", initializeScrollTrigger);
}
function animationTitle() {
  gsap.registerPlugin(ScrollTrigger);
  const textSplit = new SplitType(".title-animation h2", { types: "chars" });
  const h2Width = document.querySelector(".title-animation h2").offsetWidth;
  const svgWidth = document.querySelector(".icon-wheel").offsetWidth;

  gsap.set(".icon-wheel svg", { x: -svgWidth / 2 });
  gsap.set(".char", { opacity: 0 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".title-animation",
      start: "top 80%", // Adjust as needed
      end: "bottom 20%", // Adjust as needed // Synchronize animation with scrollbar
      markers: true, // Enable markers for debugging
      onEnter: () => console.log("Entered"), // Debugging log
      onLeave: () => console.log("Left"), // Debugging log
    },
    onUpdate: function () {
      const progress = gsap.getProperty(".icon-wheel svg", "x");
      document.querySelectorAll(".char").forEach((char) => {
        if (progress >= char.offsetLeft) {
          gsap.to(char, { opacity: 1, duration: 0.1 });
        }
      });
    },
  });

  tl.to(".icon-wheel svg", {
    x: h2Width + svgWidth * 1.9,
    rotation: 360,
    duration: 2,
    ease: "power2.inOut",
    onComplete: function () {
      gsap.to(".icon-wheel svg", {
        opacity: 0,
        scale: 0.5,
        ease: "power1.inOut",
        onComplete: function () {
          gsap.set(".icon-wheel svg", { visibility: "hidden" });
        },
      });
    },
  });
}

function swiperHotels() {
  if ($(".hotels-sec .swiper-tab").length) {
    if ($(".swiper-tab").length && $(".nav-link.active").length) {
      const swiperTab = new Swiper(".swiper-tab", {
        slidesPerView: 4,
        spaceBetween: 40,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      function updateSlideCount() {
        const activeSlideCount = $(
          ".tab-pane.show .swiper-tab .swiper-slide"
        ).length;
        $(".hotels-sec .swiper-arrows").toggleClass(
          "d-none",
          activeSlideCount <= 4
        );
      }

      updateSlideCount();
      $('button[data-bs-toggle="tab"]').on("shown.bs.tab", updateSlideCount);
    }
  }
}

function swiperRestaurant() {
  // swiper facility img
  var interleaveOffset = 0.9;
  if ($(".swiper-restaurant").length) {
    var swiperResImg = new Swiper(".swiper-restaurant", {
      loop: true,
      speed: 1200,
      grabCursor: false,
      watchSlidesProgress: true,
      watchSlidesProgress: true,
      simulateTouch: false,
      mousewheelControl: false,
      keyboardControl: false,
      on: {
        progress: function (swiper) {
          swiper.slides.forEach(function (slide) {
            var slideProgress = slide.progress || 0;
            var innerOffset = swiper.width * interleaveOffset;
            var innerTranslate = slideProgress * innerOffset;
            // Kiểm tra nếu innerTranslate không phải là NaN
            if (!isNaN(innerTranslate)) {
              var slideInner = slide.querySelector(".swiper-img");
              if (slideInner) {
                slideInner.style.transform =
                  "translate3d(" + innerTranslate + "px, 0, 0)";
              }
            }
          });
        },
        touchStart: function (swiper) {
          swiper.slides.forEach(function (slide) {
            slide.style.transition = "";
          });
        },
        setTransition: function (swiper, speed) {
          var easing = "cubic-bezier(0.25, 0.1, 0.25, 1)";
          swiper.slides.forEach(function (slide) {
            slide.style.transition = speed + "ms " + easing;
            var slideInner = slide.querySelector(".swiper-img");
            if (slideInner) {
              slideInner.style.transition = speed + "ms " + easing;
            }
          });
        },
      },
    });

    var swiperResCotent = new Swiper(".swiper-res-content", {
      effect: "fade",
      simulateTouch: false,
      mousewheelControl: false,
      keyboardControl: false,
      navigation: {
        nextEl: ".swiper-res-content .swiper-button-next",
        prevEl: ".swiper-res-content .swiper-button-prev",
      },
      thumbs: {
        swiper: swiperResImg,
      },
      fadeEffect: {
        crossFade: true,
      },
    });
  }
}

function swiperOffer() {
  if ($(".offer-sec").length) {
    const swiperOffer = new Swiper(".swiper-offer", {
      slidesPerView: 3,
      spaceBetween: 40,
      navigation: {
        nextEl: ".offer-sec .swiper-button-next",
        prevEl: ".offer-sec .swiper-button-prev",
      },
    });
  }
}

function cruise() {
  gsap.registerPlugin(ScrollTrigger);
  if ($(".cruise").length) {
    gsap.utils.toArray(".cruise-stroke").forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 45%",
        end: "bottom 45%",
        onEnter: () => el.classList.add("active"), // Add class when entering the viewport
        onLeaveBack: () => el.classList.remove("active"), // Remove class when scrolling back up
      });
    });
  }
  ScrollTrigger.refresh();
}
function testimonial() {
  gsap.registerPlugin(ScrollTrigger);
  if ($(".testimonial__list").length) {
    gsap.utils.toArray(".testimonial__list").forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 35%",
        end: "bottom 35%",
        onEnter: () => el.classList.add("active"), // Add class when entering the viewport
        onLeaveBack: () => el.classList.remove("active"), // Remove class when scrolling back up
      });
    });
  }
  ScrollTrigger.refresh();
}
