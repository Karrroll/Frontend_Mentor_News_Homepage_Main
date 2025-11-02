const nav = document.querySelector("nav");
const menuOpenBtn = document.querySelector("button.side-menu-open-icon");
const menuCloseBtn = document.querySelector("button.side-menu-close-icon");

function showSideMenu() {
  nav.classList.add("open");
  menuOpenBtn.setAttribute("aria-expanded", "true");
  nav.hidden = false;
}

function closeSideMenu() {
  nav.classList.remove("open");
  menuOpenBtn.setAttribute("aria-expanded", "false");
  nav.hidden = true;
}

menuOpenBtn.addEventListener("click", showSideMenu);
menuCloseBtn.addEventListener("click", closeSideMenu);