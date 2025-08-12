document.querySelectorAll("[data-carousel]").forEach(carousel => {
    const track = carousel.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const prevBtn = carousel.querySelector("[data-prev]");
    const nextBtn = carousel.querySelector("[data-next]");

    let index = 0;
    const total = slides.length;

    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        index = (index + 1) % total;
        updateCarousel();
    }

    function prevSlide() {
        index = (index - 1 + total) % total;
        updateCarousel();
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    // Troca automática a cada 4s
    setInterval(nextSlide, 4000);
});
