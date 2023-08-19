const navbarToggle = document.querySelector(".navbar-toggle");
const navList = document.querySelector(".nav-list");

navbarToggle.addEventListener("click", () => {
  navList.classList.add("active");
});

document.querySelector(".close-list").addEventListener("click", () => {
  navList.classList.remove("active");
});
