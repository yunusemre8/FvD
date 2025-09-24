// JavaScript Document

// const menuButton = document.querySelector("header button");
// const nav = document.querySelector("nav");
// menuButton.addEventListener("click", openMenu)

// function openMenu(){
//   nav.classList.add("toonMenu")
// }

// const sluitButton = document.querySelector("nav button");
// sluitButton.addEventListener("click", sluitMenu)

// function sluitMenu(){
// const nav = document.querySelector("nav");
  
//   nav.classList.remove("toonMenu")
// }

// chatgpt
// window.addEventListener("scroll", function () {
//     const header = document.querySelector("header");
//     if (window.scrollY > 50) {
//       header.classList.add("scrolled");
//     } else {
//       header.classList.remove("scrolled");
//     }
//   });
//   chatgpt

// Select elements
const menuButton = document.getElementById("menuButton");
const sluitButton = document.getElementById("sluitButton");
const nav = document.querySelector("nav");

// Open menu
menuButton.addEventListener("click", () => {
  nav.classList.add("toonMenu");
});

// Close menu
if (sluitButton) {
  sluitButton.addEventListener("click", () => {
    nav.classList.remove("toonMenu");
  });
}

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});







