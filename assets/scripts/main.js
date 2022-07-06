// スクロール時ヘッダー出現
const header = document.querySelector(".js-header");
const headerLogo = document.querySelector(".js-header__logo");
const headerLogoBlack = document.querySelector(".js-header__logo--b");
const hamburger = document.querySelector('.hamburger');
const hamburgerLines = document.querySelectorAll(".hamburger__line");
const gNavTextJa = document.querySelectorAll(".g-nav__text-ja");
const gNavTextEn = document.querySelectorAll(".g-nav__text-en");
const gNavText = [gNavTextEn, gNavTextJa];
const mv = document.querySelector(".js-mv");
const gNav = document.querySelector(".g-nav");

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
  mv.classList.add("top-0");
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
  mv.classList.remove("top-0");
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

// ハンバーガーメニューオープン
const hamOpenAction=()=>{
	gNav.classList.add('ham-open');
	gNavTextJa.forEach((ele)=>{
		ele.classList.remove("js-color-black");
	})
	gNavTextEn.forEach((ele)=>{
		ele.classList.remove("js-color-black");
	})
	headerLogo.classList.remove("display-none");
	headerLogoBlack.classList.remove("display-block");
	hamburger.classList.add('hamburger__open');
	hamburgerLines.forEach((line) => {
		line.classList.remove("hamburger__line--black");
	});

}
const hamCloseAction=()=>{
	gNav.classList.remove('ham-open');
	gNavTextJa.forEach((ele)=>{
		ele.classList.add("js-color-black");
	})
	gNavTextEn.forEach((ele)=>{
		ele.classList.add("js-color-black");
	})
	const offsetY = window.scrollY;
if(offsetY!==0){
	headerLogo.classList.add("display-none");
	headerLogoBlack.classList.add("display-block");
	hamburgerLines.forEach((line) => {
		line.classList.add("hamburger__line--black");
	});
}
	hamburger.classList.remove('hamburger__open');
}

const hamOpen = () => {
	if(gNav.classList.contains('ham-open')){
		hamCloseAction();
	} else {
		hamOpenAction();
	}
};

// Swiper.js
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1000,
  autoplay: true,
  centeredSlides: true,
  effect: "fade",
  // breakpoints: {
  // 	768: {
  // 		slidesPerView: 3.5,
  // 		// spaceBetween: 020
  // 	},
  // },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});
