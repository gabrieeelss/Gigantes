fetch('./JSON/noticias.json')
  .then(response => response.json())
  .then(noticias => {
    const lista = document.getElementById('ultimas-noticias');
    lista.innerHTML = ''; // Limpa qualquer conteúdo fixo
    noticias.slice(0, 3).forEach(noticia => {
      const item = document.createElement('li');
      item.innerHTML = `<strong>${noticia.data}:</strong> ${noticia.titulo}`;
      lista.appendChild(item);
    });
  })
  .catch(error => console.error('Erro ao carregar notícias:', error));
