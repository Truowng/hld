const menu = document.querySelector("header .header-nav");

AOS.init();

const openMenu = () => {
  menu.classList.add("active");
};

const closeMenu = () => {
  menu.classList.remove("active");
};
