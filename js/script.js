document.addEventListener("DOMContentLoaded", () => {
    inicializarBannerCookies();
    inicializarFAQToggle();
    inicializarCarrosselHero();
    inicializarMenuResponsivo(); // Chamada dentro do DOMContentLoaded
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
    const slides = document.querySelectorAll(".carousel-slide");
    if (!slides.length) return;

    function trocarImagem() {
        slides.forEach(slide => slide.classList.remove("active"));
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }

    // Adicione a classe 'active' ao primeiro slide no carregamento inicial
    slides[index].classList.add("active");
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

    // Dropdown deslizante com jQuery
    // Verifique se o jQuery está carregado antes de usá-lo
    if (typeof jQuery !== 'undefined') {
        $(".mobile-menu .dropdown-toggle").click(function () {
            const $submenu = $(this).next(".dropdown-menu");

            if ($submenu.is(":visible")) {
                $(this).attr("aria-expanded", "false");
                $submenu.slideUp(200).removeClass("open");
            } else {
                // Fecha outros abertos
                $(".mobile-menu .dropdown-menu.open").slideUp(200).removeClass("open");
                $(".mobile-menu .dropdown-toggle").attr("aria-expanded", "false");

                // Abre este
                $(this).attr("aria-expanded", "true");
                $submenu.slideDown(200).addClass("open");
            }
        });
    } else {
        console.warn("jQuery não está carregado. Funcionalidade de dropdown pode não funcionar.");
        // Implemente um fallback em JavaScript puro se preferir, ou garanta que jQuery seja carregado.
    }
}