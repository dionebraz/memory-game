const input = document.querySelector("input");
const button = document.querySelector("button");
const form = document.querySelector("form");

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
  localStorage.setItem("player", input.value);
  window.location = "resources/memory_game/game.html";
};

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);
