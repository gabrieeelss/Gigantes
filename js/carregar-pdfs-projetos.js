fetch("./json/projetos.json")
  .then(res => res.json())
  .then(data => {
    const seções = [
      { id: "lista-fiec", arquivos: data.fiec, pasta: "fiec" },
      { id: "lista-cbcp", arquivos: data.cbcp, pasta: "cbcp" },
      { id: "lista-lei", arquivos: data.lei, pasta: "lei-federal" }
    ];

    seções.forEach(seção => {
      const lista = document.getElementById(seção.id);
      lista.innerHTML = "";

      seção.arquivos.forEach(pdf => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = `arquivos/${seção.pasta}/${pdf.arquivo}`;
        link.target = "_blank";
        link.textContent = pdf.nome;
        li.appendChild(link);
        lista.appendChild(li);
      });
    });
  })
  .catch(err => console.error("Erro ao carregar projetos:", err));
