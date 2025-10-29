function showSideMenu() {
  document.querySelector("nav").classList.toggle("open");
  document.querySelector("nav").classList.add("side-menu");
}

function closeSideMenu() {
  document.querySelector("nav").classList.toggle("open");
  document.querySelector("nav").classList.remove("side-menu");
}

document.querySelector(".side-menu-open-icon").addEventListener("click", showSideMenu);
document.querySelector(".side-menu-close-icon").addEventListener("click", closeSideMenu);