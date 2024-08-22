$(document).ready(function () {
  console.log("ready!");
  scrollHeader();
  swiperHotels();
  swiperRestaurant();
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
      start: "top top",
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

function swiperHotels() {
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
