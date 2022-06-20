const baralho = [
  {
    nome: "back",
    img: "../images/beth.png",
  },
  {
    nome: "jerry",
    img: "../images/jerry.png",
  },
  {
    nome: "jessica",
    img: "../images/jessica.png",
  },
  {
    nome: "meeseeks",
    img: "../images/meeseeks.png",
  },
  {
    nome: "morty",
    img: "../images/morty.png",
  },
  {
    nome: "rick",
    img: "../images/rick.png",
  },
  {
    nome: "back",
    img: "../images/beth.png",
  },
  {
    nome: "jerry",
    img: "../images/jerry.png",
  },
  {
    nome: "jessica",
    img: "../images/jessica.png",
  },
  {
    nome: "meeseeks",
    img: "../images/meeseeks.png",
  },
  {
    nome: "morty",
    img: "../images/morty.png",
  },
  {
    nome: "rick",
    img: "../images/rick.png",
  },
];

baralho.sort(() => {
  return 0.5 - Math.random();
});

const grade = document.querySelector("#grade");
const spots = document.querySelector("#spots");
const playerName = (document.querySelector("#playerName").innerHTML =
  localStorage.getItem("player"));
let score;
let escolhidos = [];

function criarGrade() {
  score = 0;

  for (let i = 0; i < baralho.length; i++) {
    let card = document.createElement("img");
    card.id = i;
    card.name = baralho[i].nome;
    card.src = "../images/back.png";
    card.addEventListener("click", escolherCard);
    grade.appendChild(card);
  }
}

function escolherCard() {
  let card = this;
  card.src = baralho[card.id].img;
  escolhidos.push(card);

  if (escolhidos.length == 2) {
    setTimeout(() => {
      let card1 = escolhidos[0];
      let card2 = escolhidos[1];

      if (card1.name == card2.name && card1.id != card2.id) {
        card1.removeEventListener("click", escolherCard);
        card2.removeEventListener("click", escolherCard);
        card1.style.filter = "grayscale(100%)";
        card2.style.filter = "grayscale(100%)";
        score++;
      } else {
        card1.src = "../images/back.png";
        card2.src = "../images/back.png";
      }

      if (score == baralho.length / 2) {
        setTimeout(() => {
          grade.innerHTML = "";
          criarGrade();
          document.location.reload(true);
        }, 1000);
      }

      escolhidos = [];
    }, 500);
  }
}

//===== TEMPORIZADOR =======================//

var mm = 0;
var ss = 0;

var tempo = 900;
var cron;

cron = setInterval(() => {
  Timer();
}, tempo);

function Timer() {
  ss++;

  if (ss == 60) {
    ss = 0;
    mm++;
  }

  var format = (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);
  document.getElementById("timer").innerText = format;
}
