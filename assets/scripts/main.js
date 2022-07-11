// スクロール時ヘッダー出現
const header = document.querySelector(".js-header");
const headerLogo = document.querySelector(".js-header__logo");
const headerLogoBlack = document.querySelector(".js-header__logo--b");
const hamburger = document.querySelector(".hamburger");
const hamburgerLines = document.querySelectorAll(".hamburger__line");
const gNavTextJa = document.querySelectorAll(".l-header__gnav__text-ja");
const gNavTextEn = document.querySelectorAll(".l-header__gnav__text-en");
const gNavText = [gNavTextEn, gNavTextJa];
const mv = document.querySelector(".js-mv");
const gNav = document.querySelector(".l-header__gnav__wrapper");
const headerClone = document.querySelector(".l-header--clone");

// ヘッダーが現れるときのアクション
const options = {
  rootMargin: "80%",
  threshold: 1.0,
};
const headerObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) {
      headerClone.classList.add("clone-open");
    }
    if (e.isIntersecting) {
      headerClone.classList.remove("clone-open");
    }
  });
}, options);
headerObserver.observe(mv);

// タイトルアニメーション
const titleObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting && !e.target.classList.contains('slideLeft')) {
      console.log(e.target);
      e.target.classList.add("slideLeft");
    }
  });
});
const animateTitles = document.querySelectorAll('.c-section__heading-block');
animateTitles.forEach((t)=>{
	titleObserver.observe(t);
})

// 画像のアニメーション
const imageObserver = new IntersectionObserver((entries)=>{
	entries.forEach((e)=>{
		if (e.isIntersecting && !e.target.classList.contains('fadeUp')) {
      console.log(e.target);
      e.target.classList.add("fadeUp");
    }
	})
})
const animateImages = document.querySelectorAll('.js-animate-image');
animateImages.forEach((t)=>{
	console.log(t.target);
	imageObserver.observe(t);
})


// ハンバーガーメニューオープン
const hamOpenAction = () => {
  document.body.style.overflow = "hidden";
  header.classList.add("l-header--open");
};
const hamCloseAction = () => {
  document.body.style.overflow = "auto";
  header.classList.remove("l-header--open");
};

const hamOpen = () => {
  if (header.classList.contains("l-header--open")) {
    hamCloseAction();
  } else {
    hamOpenAction();
  }
};

// クローンメニューを開いてスクロール止める
const cloneMenuOpenAction = () => {
  headerClone.classList.add("clone-menu-open");
  document.body.style.overflow = "hidden";
};
const cloneMenuCloseAction = () => {
  headerClone.classList.remove("clone-menu-open");
  document.body.style.overflow = "auto";
};

const cloneMenuOpen = () => {
  if (headerClone.classList.contains("clone-menu-open")) {
    cloneMenuCloseAction();
  } else {
    cloneMenuOpenAction();
  }
};

// 画面リサイズ監視 スマホハンバーガーメニューが開いていたら閉じてからPCで画面へ

const ro = new ResizeObserver((entries) => {
  for (let entry of entries) {
    let w = entry.contentRect.width;
    console.log(w);
    if (w > 1028) {
      if (headerClone.classList.contains("clone-menu-open")) {
        cloneMenuCloseAction();
      }
      if (header.classList.contains("l-header--open")) {
        hamCloseAction();
      }
    }
  }
});
ro.observe(document.body);

// loading-animation
window.onload = function () {
  const loadingAnimation = document.querySelector(".c-loading-animation");
  loadingAnimation.classList.add("loaded");
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
