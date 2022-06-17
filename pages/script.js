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
    card.src = "../images/rick-and-morty.jpg";
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
        card1.src = "https://lh3.googleusercontent.com/Qi0jvdDe5T2F96YgZrC7FC5nvT5V1Go2b_3woQuVu9QTXqFqvQ40cGKuSalo_JMeIQ";
        card2.src = "https://lh3.googleusercontent.com/Qi0jvdDe5T2F96YgZrC7FC5nvT5V1Go2b_3woQuVu9QTXqFqvQ40cGKuSalo_JMeIQ";
        card1.removeEventListener("click", escolherCard);
        card2.removeEventListener("click", escolherCard);
        score++;
        spots.innerText = score;
      } else {
        card1.src = "../images/rick-and-morty.jpg";
        card2.src = "../images/rick-and-morty.jpg";
      }

      if (score == baralho.length / 2) {
        setTimeout(() => {
            alert("Muito bom!, Você achou todos os pares.");
          grade.innerHTML = "";
          criarGrade();
        }, 1000);
      }

      escolhidos = [];
    }, 1000);
  }
}
