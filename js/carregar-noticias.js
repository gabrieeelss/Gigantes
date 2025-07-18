// Carrega as notícias e insere na página
fetch('./noticias/noticias.json')
  .then(response => response.json())
  .then(noticias => {
    const container = document.getElementById('noticias-lista');
    container.innerHTML = '';
    
    noticias.forEach(noticia => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${noticia.imagem}" alt="${noticia.titulo}">
        <div class="card-content">
          <h3>${noticia.titulo}</h3>
          <div class="conteudo-expandido">
            <p>${noticia.conteudo}</p>
          </div>
        </div>
      `;

      // Adiciona comportamento de clique para expandir/recolher
      card.addEventListener('click', () => {
        card.classList.toggle('ativo');
      });

      container.appendChild(card);
    });
  })
  .catch(error => console.error('Erro ao carregar notícias:', error));
