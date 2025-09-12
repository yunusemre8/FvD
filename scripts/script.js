// JavaScript Document
console.log("hi");
const menuButton = document.querySelector("header button");
const nav = document.querySelector("nav");
menuButton.addEventListener("click", openMenu)

function openMenu(){
  nav.classList.add("toonMenu")
}

const sluitButton = document.querySelector("nav button");
sluitButton.addEventListener("click", sluitMenu)

function sluitMenu(){
const nav = document.querySelector("nav");
  
  nav.classList.remove("toonMenu")
}

// chatgpt
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
//   chatgpt