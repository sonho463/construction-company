// スクロール時ヘッダー出現
const header = document.querySelector(".js-header");
const headerLogo = document.querySelector(".js-header__logo");
const headerLogoBlack = document.querySelector(".js-header__logo--b");
const hamburgerLines = document.querySelectorAll(".hamburger__line");
const gNavTextJa = document.querySelectorAll(".g-nav__text-ja");
const gNavTextEn = document.querySelectorAll(".g-nav__text-en");
const gNavText = [gNavTextEn, gNavTextJa];
const mv = document.querySelector('.js-mv');


// ヘッダーが現れるときのアクション
const addClassAction = () => {
  header.classList.add("fixed");
  headerLogo.classList.add("display-none");
  headerLogoBlack.classList.add("display-block");
  hamburgerLines.forEach((line) => {
    line.classList.add("hamburger__line--black");
  });
  gNavText.forEach((ele) => {
    ele.forEach((ele) => {
      ele.classList.add("js-color-black");
    });
  });
	mv.classList.add('top-0')
};

// ヘッダーが消えるときのアクション
const removeClassAction = () => {
	gNavText.forEach((ele) => {
		header.classList.remove("fixed");
    headerLogo.classList.remove("display-none");
    headerLogoBlack.classList.remove("display-block");
    hamburgerLines.forEach((line) => {
			line.classList.remove("hamburger__line--black");
    });
    ele.forEach((ele) => {
			ele.classList.remove("js-color-black");
    });
  });
	mv.classList.remove('top-0')
};

window.addEventListener("scroll", () => {
  const offsetY = window.scrollY;
  if (offsetY > 120) {
    addClassAction();
  }
  if (offsetY > 400) {
    header.classList.add("appear");
  }
  if (offsetY < 400) {
    header.classList.remove("appear");
  }
  if (offsetY < 70) {
    removeClassAction();
  }
});
