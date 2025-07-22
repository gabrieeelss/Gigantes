fetch("./JSON/pdfs-contabilidade.json")
  .then(res => res.json())
  .then(pdfsPorAno => {
    const grid = document.getElementById("pdf-grid-contabilidade");

    Object.keys(pdfsPorAno).sort((a, b) => b - a).forEach(ano => {
      const coluna = document.createElement("div");
      coluna.className = "pdf-coluna";

      const titulo = document.createElement("h2");
      titulo.textContent = ano;
      coluna.appendChild(titulo);

      const lista = document.createElement("ul");
      lista.className = "pdf-lista";

      pdfsPorAno[ano].forEach(pdf => {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = `arquivos/contabilidade/${pdf.arquivo}`;
        link.target = "_blank";
        link.textContent = pdf.nome;

        item.appendChild(link);
        lista.appendChild(item);
      });

      coluna.appendChild(lista);
      grid.appendChild(coluna);
    });
  })
  .catch(error => {
    console.error("Erro ao carregar os PDFs:", error);
  });
