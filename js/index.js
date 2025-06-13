const burger = document.querySelector(".menu__burger");
const menuList = document.querySelector(".menu__list");

burger.addEventListener("click", () => {
  menuList.classList.toggle("active");
});
