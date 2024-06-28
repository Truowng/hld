const menu = document.querySelector("header .header-nav");

AOS.init();

const openMenu = () => {
  menu.classList.add("active");
};

const closeMenu = () => {
  menu.classList.remove("active");
};

const projectSlide = document.querySelector(
  ".project-detail .project-detail-slider .swiper-main"
);

const projectSlideThumbs = document.querySelector(
  ".project-detail .project-detail-slider .swiper-thumbs"
);

if (projectSlide) {
  const projectThumbs = new Swiper(projectSlideThumbs, {
    direction: "horizontal",
    speed: 500,
    spaceBetween: 5,
    slidesPerView: 6,
    breakpoints: {
      576: {
        slidesPerView: 10,
      },
      767: {
        slidesPerView: 15,
      },
      1399: {
        slidesPerView: 20,
      },
    },
  });

  const projectSlider = new Swiper(projectSlide, {
    direction: "horizontal",
    speed: 500,
    spaceBetween: 20,
    autoplay: {
      delay: 5000,
    },
    thumbs: {
      swiper: projectThumbs,
    },
    navigation: {
      nextEl: ".project-detail-slider .swiper-main .btn-next",
      prevEl: ".project-detail-slider .swiper-main .btn-prev",
    },
  });
}
