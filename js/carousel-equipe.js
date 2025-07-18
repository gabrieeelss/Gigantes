document.addEventListener("DOMContentLoaded", () => {
  const carrosseis = [
    {
      trackSelector: ".atletas-track",
      prevSelector: ".carousel-btn.prev.atletas",
      nextSelector: ".carousel-btn.next.atletas",
      visible: 3,
      interval: 4000,
    },
    {
      trackSelector: ".profissionais-track",
      prevSelector: ".carousel-btn.prev.prof",
      nextSelector: ".carousel-btn.next.prof",
      visible: 3,
      interval: 5000,
    },
  ];

  carrosseis.forEach(({ trackSelector, prevSelector, nextSelector, visible, interval }) => {
    const track = document.querySelector(trackSelector);
    const prevBtn = document.querySelector(prevSelector);
    const nextBtn = document.querySelector(nextSelector);
    const cards = track.querySelectorAll(".card");

    let index = 0;

    function updateCarousel() {
      if (!cards.length) return;

      const cardStyle = getComputedStyle(cards[0]);
      const marginRight = parseFloat(cardStyle.marginRight) || 20;
      const cardWidth = cards[0].offsetWidth + marginRight;
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    prevBtn?.addEventListener("click", () => {
      if (index > 0) index--;
      updateCarousel();
    });

    nextBtn?.addEventListener("click", () => {
      if (index < cards.length - visible) index++;
      updateCarousel();
    });

    setInterval(() => {
      if (index < cards.length - visible) {
        index++;
      } else {
        index = 0;
      }
      updateCarousel();
    }, interval);

    window.addEventListener("load", updateCarousel);
    window.addEventListener("resize", updateCarousel);
  });
});
