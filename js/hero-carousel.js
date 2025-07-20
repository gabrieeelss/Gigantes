document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  if (!track) return; // Sai se não encontrar o carrossel

  const slides = Array.from(track.children);
  if (slides.length === 0) return; // Sai se não tiver slides

  const prevButton = document.querySelector('.carousel-btn.prev');
  const nextButton = document.querySelector('.carousel-btn.next');
  if (!prevButton || !nextButton) return; // Sai se não encontrar botões

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

  window.addEventListener('resize', () => {
    slideWidth = slides[0].getBoundingClientRect().width;
    updateCarousel();
  });

  setInterval(showNextSlide, 5000);
});
