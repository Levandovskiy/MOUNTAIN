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

// Пример: Слушатели событий для кнопок
const buttons = document.querySelectorAll(".button-class"); // Замените .button-class на ваш класс кнопок

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonId = event.target.id; // Получаем ID кнопки
    console.log(`Кнопка с ID ${buttonId} была нажата`);

    // Добавьте здесь логику для каждой кнопки
    if (buttonId === "button1") {
      alert("Кнопка 1 нажата!");
    } else if (buttonId === "button2") {
      alert("Кнопка 2 нажата!");
    }
  });
});

// ...existing code...

const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;

function updateSlider() {
  const slidesContainer = document.querySelector(".slides");
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

// ...existing code...
