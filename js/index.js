const burger = document.querySelector(".menu__burger");
const menuList = document.querySelector(".menu__list");

burger.addEventListener("click", () => {
  menuList.classList.toggle("active");
});

// ...existing code...

const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Предотвращаем перезагрузку страницы

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("Ім'я користувача:", username);
  console.log("Email:", email);
  console.log("Пароль:", password);

  // Здесь можно добавить логику для отправки данных на сервер
  alert("Реєстрація успішна!");
});

// ...existing code...
