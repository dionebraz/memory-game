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

const body = document.querySelector("body");
const grade = document.querySelector("#grade");
const spots = document.querySelector("#spots");
const lastSpots = document.querySelector('#last-spots')
const playerName = (document.querySelector("#playerName").innerHTML = localStorage.getItem("player"));

let score;
let escolhidos = [];

function criarGrade() {

  
  score = 0;
  spots.innerHTML = score

  if(lastSpots > score) {
    lastSpots.innerHTML;
  }

  for (let i = 0; i < baralho.length; i++) {
    let card = document.createElement("img");
    card.id = i;
    card.name = baralho[i].nome;
    card.src = "../images/back.png";
    card.addEventListener("click", escolherCard);
    grade.appendChild(card);
  }
}

function escolherCard(e) {
  let card = e.target;
  card.src = baralho[card.id].img;
  escolhidos.push(card);

  card.classList.toggle('front')

  if (escolhidos.length == 2) {
    setTimeout(() => {
      let card1 = escolhidos[0];
      let card2 = escolhidos[1];

      if (card1.name == card2.name && card1.id != card2.id) {
        selectionSound()

        card1.removeEventListener("click", escolherCard);
        card2.removeEventListener("click", escolherCard);
        card1.style.filter = "grayscale(100%)";
        card2.style.filter = "grayscale(100%)";
        score++;
        spots.innerHTML = score
      } else {
        card1.src = "../images/back.png";
        card2.src = "../images/back.png";
        card.classList.toggle('front')
      }

      if (score == baralho.length / 2) {
        concludedSound();
        clearInterval(cron);

        setTimeout(() => {
          const resetButton = document.createElement("button");
          resetButton.innerHTML = "Reiniciar";
          body.appendChild(resetButton);
          resetButton.addEventListener("click", () => {
            document.location.reload(true);
            lastSpots = score
            if(lastSpots == score) {}
          });
        }, 500);
      }

      function concludedSound() {
        const audio2 = document.querySelector("#audio2");
        audio2.play();
      }
  
      function selectionSound() {
        const audio1 = document.querySelector("#audio1");
        audio1.play();
      }

      escolhidos = [];
    }, 500);
  }
}

//===== TEMPORIZADOR =======================//

var mm = 0;
var ss = 0;

var tempo = 1000;
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
