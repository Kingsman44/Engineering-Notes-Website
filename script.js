//! dark mode

const header = document.querySelector(".header");
const toggle = document.querySelector(".toggle-mode");
const body = document.querySelector("body");
const paragraph = document.querySelector("p");
const links = document.querySelectorAll(".nav-link");
const title = document.querySelectorAll("h2");
var lightmode = 'true';

if (localStorage.getItem("lightmode") === null) {
  localStorage.setItem('lightmode', 'true');
} else if (localStorage.getItem("lightmode") == 'false') {
  body.classList.add("dark-mode");
  header.classList.add("header-dark-mode");
  paragraph.classList.add("header-dark-mode");
  links.forEach(function (e) {
    e.classList.add("header-dark-mode");
  });
  title.forEach(function (e) {
    e.classList.add("dark-mode");
  });
  document.querySelector(`.moon`).style.display = "none";
  document.querySelector(`.sun`).style.display = "inline-block";
}

toggle.addEventListener("click", function (e) {
  const nextIcon = e.target.getAttribute("data-set");
  e.target.style.display = "none";
  console.log(nextIcon);
  //   document.querySelector("")
  if (nextIcon === "sun") {
    body.classList.add("dark-mode");
    header.classList.add("header-dark-mode");
    paragraph.classList.add("header-dark-mode");
    links.forEach(function (e) {
      e.classList.add("header-dark-mode");
    });
    document.querySelector(`.${nextIcon}`).style.display = "inline-block";
    title.forEach(function (e) {
      e.classList.add("dark-mode");
    });
    localStorage.setItem('lightmode', 'false');
  } else {
    body.classList.remove("dark-mode");
    header.classList.remove("header-dark-mode");
    paragraph.classList.remove("header-dark-mode");
    links.forEach(function (e) {
      e.classList.remove("header-dark-mode");
    });
    document.querySelector(`.${nextIcon}`).style.display = "inline-block";
    title.forEach(function (e) {
      e.classList.remove("dark-mode");
    });
    localStorage.setItem('lightmode', 'true');
  }
});
