const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');

let currentIndex = 0;
let slideWidth = slides[0].getBoundingClientRect().width;

function updateCarousel() {
  const offset = currentIndex * slideWidth;
  track.style.transform = `translateX(-${offset}px)`;
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

// Ajusta largura em redimensionamento
window.addEventListener('resize', () => {
  slideWidth = slides[0].getBoundingClientRect().width;
  updateCarousel();
});

// Rotaciona automaticamente
setInterval(showNextSlide, 5000);
