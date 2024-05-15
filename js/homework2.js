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
