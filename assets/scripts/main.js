// スクロール時ヘッダー出現
const header = document.querySelector(".js-header");
const headerLogo = document.querySelector(".js-header__logo");
const headerLogoBlack = document.querySelector(".js-header__logo--b");
const hamburgerLines = document.querySelectorAll(".hamburger__line");

window.addEventListener("scroll", () => {
  const offsetY = window.scrollY;
  if (offsetY > 120) {
    header.classList.add("fixed");
    headerLogo.classList.add("display-none");
    headerLogoBlack.classList.add("display-block");
    hamburgerLines.forEach((line) => {
      line.classList.add("hamburger__line--black");
    });
  }
  if (offsetY > 400) {
    header.classList.add("appear");
  }
  if (offsetY < 400) {
    header.classList.remove("appear");
  }
  if (offsetY < 70) {
    header.classList.remove("fixed");
    headerLogo.classList.remove("display-none");
    headerLogoBlack.classList.remove("display-block");
    hamburgerLines.forEach((line) => {
      line.classList.remove("hamburger__line--black");
    });
  }
});
