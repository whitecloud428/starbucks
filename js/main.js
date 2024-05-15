const badgeEl = document.querySelector("header .badges");

const toTopEl = document.querySelector("#to-top");
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
      //버튼보이기!
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      //배지 보이기
      // badgeEl.style.display = "block";
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      //버튼 숨기기!
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);
// _.throttle(함수,시간)

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

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

new Swiper(".awards .swiper-container", {
  direction: "horizontal",
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
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
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
// 애니메이션
function floatingObject(selector, delay, size) {
  // gasp.to(요소, 동작시간,옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    //무한반복
    yoyo: true,
    //뒤로재생을해서 다시 위로올라가도록
    //gsap easing
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl, index) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
    // 감시하고있는 하나의 섹션
    triggerHook: 0.8, //0~1 viewport 시작과 끝
    // 0.8 훅 갈고리 트리거가 걸려있기때문에 거기에 걸리면 트리거에 실행이된다.
    //setClassToggle을 실행한다.
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
