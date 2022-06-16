const input = document.querySelector("input");
const button = document.querySelector("button");
const form = document.querySelector("form");
const msgInfo = document.querySelector("#messageInfo");

const validateInput = ({ target }) => {
  if (target.value.length > 4) {
    button.removeAttribute("disabled");
    return;
  }

  if (input.value === "") {
    msgInfo.textContent = "";
    return;
  }

  msgInfo.style.opacity = 1;
  button.setAttribute("disabled", "");
};

const handleSubmit = (event) => {
  event.preventDefault();
  msgInfo.textContent = "Página do game não implementada!";
  window.location = '../pages/game.html';
};

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);