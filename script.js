// Configuração das estrelas
const starCount = 750;
const stars = [];

// Função para criar e posicionar estrelas
function createStars() {
  // Limpa estrelas existentes em redimensionamento
  stars.forEach(star => star.remove());
  stars.length = 0;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    // Define tamanho, posição e animação de forma randômica
    const size = Math.random() * 3 + 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * windowWidth}px`;
    star.style.top = `${Math.random() * windowHeight}px`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    star.style.animationDelay = `${Math.random() * 2}s`;

    document.body.appendChild(star);
    stars.push(star);
  }
}

// Função para atualizar o temporizador
function updateCountdown() {
  const targetDate = new Date("March 30, 2025 00:00:00").getTime();
  const now = Date.now();
  const timeRemaining = targetDate - now;

  const countdownElement = document.getElementById("countdown");
  const letterElement = document.getElementById("letter");

  if (timeRemaining <= 0) {
    countdownElement.style.display = "none"; // Esconde o temporizador
    letterElement.style.display = "block";  // Mostra a carta
    return;
  }

  // Calcula tempo restante
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Atualiza o elemento com o tempo restante
  countdownElement.innerText = `${days} D ${hours} H ${minutes} M ${seconds} S`;
}

// Inicialização e redimensionamento
function init() {
  createStars();
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  const player = document.getElementById('musicPlayer');
  player.volume = 0.05;

  const startMusic = () => {
    player.play().catch((error) => {
      console.log('Autoplay bloqueado. Música será iniciada após interação do usuário.');
    });
    document.removeEventListener('click', startMusic); // Remove o listener após a primeira interação
  };

  document.addEventListener('click', startMusic);
});


// Inicializa tudo
init();
