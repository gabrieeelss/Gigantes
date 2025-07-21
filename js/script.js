document.addEventListener("DOMContentLoaded", () => {
  inicializarBannerCookies();
  inicializarFAQToggle();
  inicializarCarrosselHero();
  inicializarMenuResponsivo();
});

// ----------------------------
// 1. Banner de Cookies
function inicializarBannerCookies() {
  const banner = document.getElementById("cookie-banner");
  const aceitarBtn = document.getElementById("cookie-aceitar");

  if (banner && !localStorage.getItem("cookiesAceitos")) {
    banner.style.display = "block";
  }

  if (aceitarBtn) {
    aceitarBtn.addEventListener("click", () => {
      localStorage.setItem("cookiesAceitos", "true");
      banner.style.display = "none";
    });
  }
}

// ----------------------------
// 2. FAQ Toggle
function inicializarFAQToggle() {
  const perguntas = document.querySelectorAll(".faq-question");
  perguntas.forEach(pergunta => {
    pergunta.addEventListener("click", () => {
      const resposta = pergunta.nextElementSibling;
      if (!resposta) return;
      const visivel = resposta.style.display === "block";
      resposta.style.display = visivel ? "none" : "block";
    });
  });
}

// ----------------------------
// 3. Carrossel de Hero
function inicializarCarrosselHero() {
  let index = 0;
  const imgs = document.querySelectorAll(".carousel-img");
  if (!imgs.length) return;

  function trocarImagem() {
    imgs.forEach(img => img.classList.remove("active"));
    index = (index + 1) % imgs.length;
    imgs[index].classList.add("active");
  }

  setInterval(trocarImagem, 4000);
}

// ----------------------------
// 4. Menu Responsivo e Dropdowns Mobile
function inicializarMenuResponsivo() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
      mobileMenu.classList.toggle("open");
    });
  }

  const dropdownToggles = document.querySelectorAll(".mobile-menu .dropdown-toggle");
  dropdownToggles.forEach(botao => {
    botao.setAttribute("aria-expanded", "false");
botao.addEventListener("click", () => {
  const dropdown = botao.nextElementSibling;
  const isOpen = botao.getAttribute("aria-expanded") === "true";

  // Fecha todos os outros dropdowns
  dropdownToggles.forEach(outroBotao => {
    if (outroBotao !== botao) {
      outroBotao.setAttribute("aria-expanded", "false");
      const outroDropdown = outroBotao.nextElementSibling;
      outroDropdown.classList.remove("open");
    }
  });

  // Alterna o atual
  botao.setAttribute("aria-expanded", String(!isOpen));
  dropdown.classList.toggle("open");
});
  })}
