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

let thisYear = new Date().getFullYear();
document.querySelector(".this-year").textContent = thisYear;
