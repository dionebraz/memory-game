const grade = document.querySelector('.grade');
const $themeAudio = document.querySelector('#audio-theme')
const playerName = document.querySelector('.player')
const timer = document.querySelector('.timer')

const characters = [
  'Billy',
  'Dustin',
  'Eleven',
  'Jonathan',
  'Karen',
  'Lucas',
  'Max',
  'Mike',
  'Steve',
  'Will',
];

const audioTheme = () => {
  $themeAudio.play()
}

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === 20) {
    clearInterval(startTimer)
    setTimeout(() => alert(`Parabéns, você encontrou todas as cartas!!!`), location.reload() , 1000)
  }
}

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

  if (firstCharacter === secondCharacter) {
    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    const audio1 = document.querySelector('#audio1').play()

    firstCard = '';
    secondCard = '';

    checkEndGame();
  } else {
    setTimeout(() => {
      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';
    }, 500);

    
  }
}

const revealCard = ({target}) => {
  if (target.parentNode.className.includes('reveal-card')) {
    return;
  }

  if (firstCard === '') {
    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;
  } else if (secondCard === '') {
    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;
  };

  checkCards();
}

const createCard = (character) => {
  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../images/${character}.webp')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', character)
  
  return card;
};

const loadGame = () => {
  const duplicateCharacters = [ ...characters, ...characters ];

  const shuffledArray = duplicateCharacters.sort( () => Math.random() - 0.5 );

  shuffledArray.forEach( (character) => {
    const card = createCard(character);
    grade.appendChild(card);
  } );
}

// Botão Play / Pause

var isPlaying = false;

function togglePlay() {
  isPlaying ? $themeAudio.pause() : $themeAudio.play();
};

$themeAudio.onplaying = function() {
  isPlaying = true;
  document.querySelector('#playPause img').src="../icons/pause-circle.svg"
};

$themeAudio.onpause = function() {
  isPlaying = false;
  document.querySelector('#playPause img').src="../icons/play-circle.svg"
};

// Mostrar nome do jogador 

playerName.innerHTML = localStorage.getItem('player')

// temporizador 

const startTimer = () => {
  setInterval(() => {
    const currentTime = Number(timer.innerHTML)
    timer.innerHTML = currentTime + 1
  }, 1000)
}

window.onload = () => {
  loadGame()
  audioTheme()
  startTimer()
}