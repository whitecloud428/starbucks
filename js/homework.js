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

const hoverouter = document.querySelector(".hover-outer");
console.log(hoverouter);
hoverouter.style.display = "none";
const mainmenuEl1 = document.querySelector(".main-menu");
console.log(mainmenuEl1);
const mainmenuliEl1 = mainmenuEl1.querySelector("li");
console.log(mainmenuliEl1);
mainmenuliEl1.addEventListener("mouseenter", function () {
  hoverouter.style.display = "block";
  // hoverouter.setAttribute("display", "");
});

mainmenuliEl1.addEventListener("mouseleave", function () {
  hoverouter.style.display = "none";
  // hoverouter.setAttribute("display", "");
});
