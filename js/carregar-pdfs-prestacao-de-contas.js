fetch('./json/prestacao-de-contas.json')
  .then(response => response.json())
  .then(pdfs => {
    pdfs.forEach(pdf => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${pdf.arquivo}" target="_blank">${pdf.nome}</a>`;

      if (pdf.categoria === 'FIEC') {
        document.querySelector('#pdf-fiec .pdf-lista').appendChild(li);
      } else if (pdf.categoria === 'CBCP') {
        document.querySelector('#pdf-cbcp .pdf-lista').appendChild(li);
      } else if (pdf.categoria === 'Lei Federal') {
        document.querySelector('#pdf-lei .pdf-lista').appendChild(li);
      }
    });
  })
  .catch(error => console.error('Erro ao carregar PDFs:', error));
