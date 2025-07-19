// Ativa dropdown via clique (mobile)
document.querySelectorAll('.nav-item.dropdown > a').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const dropdown = item.nextElementSibling;
    const isVisible = dropdown.style.display === 'block';
    // Esconde todos os dropdowns abertos
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
    // Mostra ou esconde o dropdown atual
    dropdown.style.display = isVisible ? 'none' : 'block';
  });
});

// Fecha dropdown se clicar fora
document.addEventListener('click', e => {
  if (!e.target.closest('.nav-item.dropdown')) {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});
// Carrossel de imagens na hero
let index = 0;
const imgs = document.querySelectorAll('.carousel-img');

function trocarImagem() {
  imgs.forEach((img, i) => {
    img.classList.remove('active');
  });
  index = (index + 1) % imgs.length;
  imgs[index].classList.add('active');
}

setInterval(trocarImagem, 4000);
// AVISO DE COOKIES

  document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('cookiesAceitos')) {
      document.getElementById('cookie-banner').style.display = 'block';
    }

    document.getElementById('cookie-aceitar').addEventListener('click', function () {
      localStorage.setItem('cookiesAceitos', true);
      document.getElementById('cookie-banner').style.display = 'none';
    });
  });
