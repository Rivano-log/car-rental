const hamburger = document.querySelector(".nav__hamburger");
const closeBtn = document.querySelector(".nav__close");
const navLinks = document.querySelectorAll(".nav__link");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    document.body.classList.add("open");
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    document.body.classList.remove("open");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("open");
  });
});