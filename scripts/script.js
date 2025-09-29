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

// wwa carousel in carousel



  const menuItems = document.querySelectorAll('.carousel-menu li');
  const contents = document.querySelectorAll('.carousel-article');

  menuItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault(); 

      const activeContent = contents[index];
      activeContent.classList.add('active');
      item.classList.add('active');
  
      activeContent.scrollTop = 0;

      contents.forEach(content => content.classList.remove('active'));
      menuItems.forEach(m => m.classList.remove('active'));



      contents[index].classList.add('active');
      item.classList.add('active');
    });
  });



  // const menuToggle = document.querySelector('.menu-toggle');
  // const menuClose = document.querySelector('.menu-close');
  // const mobileMenu = document.querySelector('.mobile-menu');

  // menuToggle.addEventListener('click', () => {
  //   mobileMenu.classList.add('active');
  // });

  // menuClose.addEventListener('click', () => {
  //   mobileMenu.classList.remove('active');
  // });