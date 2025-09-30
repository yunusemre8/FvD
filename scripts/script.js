
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
  item.addEventListener('click', (a) => {
    a.preventDefault();

    // 1) Tüm içerikleri ve menüleri pasifleştir
    contents.forEach(content => content.classList.remove('active'));
    menuItems.forEach(m => m.classList.remove('active'));

    const activeContent = contents[index];

    activeContent.classList.add('active');
    item.classList.add('active');
  });
});

// light/dark mode Met behulp van ChatGPT
// Link: https://chatgpt.com/share/68dba57a-2cf8-8005-9829-376821b136bb

const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');

  if (document.body.classList.contains('light')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
});

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}