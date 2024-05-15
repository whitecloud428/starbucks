console.log("JS");

const searchEl = document.querySelector(".search");
console.log(searchEl);
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  // Logic..
  searchInputEl.focus();
});

// 💦왜 focused class를 붙인거지?
// css적용하려고!! (너비 늘리는거)
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

//focus가 해제되었을때
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");

// document " html 그 자체"
// window " 브라우저의 하나 탭, 브라우저 창 윈도우 객체 우리가 보고있는 화면 자체"
window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      //배지 숨기기
      // badgeEl.style.display = "none";
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      //배지 보이기
      // badgeEl.style.display = "block";
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);
// _.throttle(함수,시간)

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //0.7, 1.4, 2.1, 2.7초
    opacity: 1,
  });
});

// swiper
// new Swiper(선택자,옵션)
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  //자동재생
  loop: true,
  // 반복재생
});

//promotion부분 swiper
new Swiper(".promotion .swiper-container", {
  // 기본값direction: 'horizontal',
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000,
  //   // 3초가 default
  // },
  pagination: {
    el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자
    clickable: true, //사용자의 페이지번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

let isNotHidePromotion = false;
// let isClicked = false;
let isHidePromotion = false;
//숨겨져있니?

//이벤트 핸들러 함수
const toggleFunc = () => {
  if (isNotHidePromotion) {
    //hide되어있으면 => 보임처리
    promotionEl.style.display = "block";
    isNotHidePromotion = !isNotHidePromotion;
    // promotionEl.classList.remove('hide');
  } else {
    //보여있으면 => 숨김처리
    promotionEl.style.display = "none";
    isNotHidePromotion = !isNotHidePromotion;
    // promotionEl.classList.add('hide');
    // 지정후 따로 css 스타일 지정해주면도ㅚㄴ다.
  }
};

// 단순히 js로 제어하는것보다 css로 클래스 애니메이션 처리
// css로 제어해주면 된다.
const toggleTeachFunc = () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    //숨김처리
    promotionEl.classList.add("hide");
  } else {
    //보임처리
    promotionEl.classList.remove("hide");
  }
};

promotionToggleBtn.addEventListener("click", toggleTeachFunc);
//클릭하면 함수실행 함수=> 이벤트핸들러
