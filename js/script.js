document.addEventListener('DOMContentLoaded', function () {
  // AVISO DE COOKIES
  const banner = document.getElementById('cookie-banner');
  if (banner && !localStorage.getItem('cookiesAceitos')) {
    banner.style.display = 'block';
  }

  const aceitarBtn = document.getElementById('cookie-aceitar');
  if (aceitarBtn) {
    aceitarBtn.addEventListener('click', function () {
      localStorage.setItem('cookiesAceitos', true);
      if (banner) banner.style.display = 'none';
    });
  }

  // PERGUNTAS FREQUENTES
  document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      if (!answer) return;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });

  // Carrossel de imagens na hero
  let index = 0;
  const imgs = document.querySelectorAll('.carousel-img');

  function trocarImagem() {
    imgs.forEach(img => img.classList.remove('active'));
    index = (index + 1) % imgs.length;
    imgs[index].classList.add('active');
  }
  if (imgs.length > 0) {
    setInterval(trocarImagem, 4000);
  }

  // MENU RESPONSIVO
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("active");

      // Fecha todos os dropdowns ao abrir/fechar o menu
      document.querySelectorAll(".dropdown").forEach(drop => {
        drop.classList.remove("open");
      });
    });
  }

  // Dropdown mobile (abre ao clicar)
  document.querySelectorAll(".dropdown > a").forEach(link => {
    link.addEventListener("click", e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parent = link.parentElement;

        // Fecha outros dropdowns abertos
        document.querySelectorAll(".dropdown").forEach(drop => {
          if (drop !== parent) drop.classList.remove("open");
        });

        parent.classList.toggle("open");
      }
    });
  });

  // Fecha dropdowns se clicar fora
  document.addEventListener("click", e => {
    if (!e.target.closest(".nav-item.dropdown")) {
      document.querySelectorAll(".dropdown").forEach(drop => {
        drop.classList.remove("open");
      });
    }
  });
});
