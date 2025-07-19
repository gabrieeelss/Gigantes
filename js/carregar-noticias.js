fetch('./JSON/noticias.json')
  .then(response => response.json())
  .then(noticias => {
    // Ordenar as notícias pela data (mais recente primeiro)
    noticias.sort((a, b) => {
      const dataA = converterDataBRparaISO(a.data);
      const dataB = converterDataBRparaISO(b.data);
      return dataB - dataA;
    });

    const container = document.getElementById('noticias-lista');
    container.innerHTML = '';

    noticias.forEach(noticia => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${noticia.imagem}" alt="${noticia.titulo}">
        <h3>${noticia.titulo}</h3>
      `;
      card.addEventListener('click', () => abrirModal(noticia));
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Erro ao carregar notícias:', error));

// Converte "DD/MM/YYYY" para objeto Date utilizável
function converterDataBRparaISO(dataBR) {
  const [dia, mes, ano] = dataBR.split('/');
  return new Date(`${ano}-${mes}-${dia}`);
}

// Exibe o modal com a notícia selecionada
function abrirModal(noticia) {
  const modal = document.getElementById('modal-noticia');
  document.getElementById('modal-img').src = noticia.imagem;
  document.getElementById('modal-img').alt = noticia.titulo;
  document.getElementById('modal-descricao').innerText = noticia.conteudo;
  modal.style.display = 'block';
}

// Fechar o modal
document.querySelector('.fechar').addEventListener('click', () => {
  document.getElementById('modal-noticia').style.display = 'none';
});

window.addEventListener('click', (e) => {
  const modal = document.getElementById('modal-noticia');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
