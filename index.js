function showSideMenu() {
  document.querySelector("nav").classList.toggle("open");
  document.querySelector("nav").classList.add("side-menu");
}

function closeSideMenu() {
  document.querySelector("nav").classList.toggle("open");
  document.querySelector("nav").classList.remove("side-menu");
}

document.querySelector(".menu-icon").addEventListener("click", showSideMenu);
document.querySelector(".sidebar-close-icon").addEventListener("click", closeSideMenu);