const baralho = [
  {
    nome: "urso1",
    img: "../images/panda-bebendo.webp",
  },
  {
    nome: "urso2",
    img: "../images/panda-dormindo.webp",
  },
  {
    nome: "urso3",
    img: "../images/panda-bravo.webp",
  },
  {
    nome: "urso4",
    img: "../images/panda-mochila.webp",
  },
  {
    nome: "urso5",
    img: "../images/panda-pc.webp",
  },
  {
    nome: "urso6",
    img: "../images/panda-sorvete.webp",
  },
  {
    nome: "urso1",
    img: "../images/panda-bebendo.webp",
  },
  {
    nome: "urso2",
    img: "../images/panda-dormindo.webp",
  },
  {
    nome: "urso3",
    img: "../images/panda-bravo.webp",
  },
  {
    nome: "urso4",
    img: "../images/panda-mochila.webp",
  },
  {
    nome: "urso5",
    img: "../images/panda-pc.webp",
  },
  {
    nome: "urso6",
    img: "../images/panda-sorvete.webp",
  },
];

baralho.sort(() => {
  return 0.5 - Math.random();
});

const grade = document.querySelector("#grade");
const spots = document.querySelector("#spots");
let score;
let escolhidos = [];

function criarGrade() {
  score = 0;
  spots.innerText = score;

  for (let i = 0; i < baralho.length; i++) {
    let card = document.createElement("img");
    card.id = i;
    card.name = baralho[i].nome;
    card.src = "../images/capa-game.jpg";
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
        card1.src = "../images/ok.jpg";
        card2.src = "../images/ok.jpg";
        card1.removeEventListener("click", escolherCard);
        card2.removeEventListener("click", escolherCard);
        score++;
        spots.innerText = score;
      } else {
        card1.src = "../images/capa-game.jpg";
        card2.src = "../images/capa-game.jpg";
      }

      if (score == baralho.length / 2) {
        setTimeout(() => {
          window.location = "./concluido/index.html"
          grade.innerHTML = "";
          criarGrade();
        }, 1000);
      }

      escolhidos = [];
    }, 1000);
  }
}
