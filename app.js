const hamburger = document.querySelector(".nav__hamburger");
const closeBtn = document.querySelector(".nav__close");
const links = document.querySelectorAll(".nav__link");

hamburger.addEventListener("click", () => {
  document.body.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  document.body.classList.remove("open");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("open");
  });
});