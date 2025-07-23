fetch('./json/noticias.json')
  .then(response => response.json())
  .then(noticias => {
    // Ordena as notícias da mais recente para a mais antiga
    noticias.sort((a, b) => {
      const dataA = converterDataBRparaISO(a.data);
      const dataB = converterDataBRparaISO(b.data);
      return dataB - dataA;
    });

    // Pega as 3 mais recentes
    const ultimas = noticias.slice(0, 3);

    const lista = document.getElementById('ultimas-noticias');
    lista.innerHTML = '';

    ultimas.forEach(noticia => {
      const item = document.createElement('li');
      item.innerHTML = `<strong>${noticia.data}:</strong> ${noticia.titulo}`;
      lista.appendChild(item);
    });
  })
  .catch(error => console.error('Erro ao carregar notícias:', error));

// Função auxiliar para converter "DD/MM/AAAA" para formato Date
function converterDataBRparaISO(dataBR) {
  if (!dataBR.includes('/')) return new Date(dataBR); // já está em formato ISO
  const [dia, mes, ano] = dataBR.split('/');
  return new Date(`${ano}-${mes}-${dia}`);
}
