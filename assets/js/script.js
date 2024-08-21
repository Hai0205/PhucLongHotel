$(document).ready(function () {
  console.log("ready!");
  scrollHeader();
  swiperHotels();
});

function scrollHeader() {
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
    });

    function updateSlideCount() {
      const activeSlideCount = $(
        ".tab-pane.show .swiper-tab .swiper-slide"
      ).length;
      console.log("Số lượng swiper-slide đang hoạt động:", activeSlideCount);
    }

    updateSlideCount();
    $('button[data-bs-toggle="tab"]').on("shown.bs.tab", updateSlideCount);
  }
}
