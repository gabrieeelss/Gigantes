const pdfs = [
  { nome: "Projeto Aprovado", arquivo: "PROJETO APROVADO - Rugby em Cadeira de Rodas Gigantes.pdf" },
  { nome: "Publicação no DOU", arquivo: "DOU - Rugby em Cadeira de Rodas Gigantespdf" },
  { nome: "Retificação do Valor do Projeto", arquivo: "RETIFICAÇÃO DOU - VL DO PROJETO - 786.014.72.pdf" },
];

const lista = document.getElementById("lista-pdfs");

pdfs.forEach(pdf => {
  const item = document.createElement("a");
  item.className = "pdf-item";
  item.href = `arquivos/lei-federal/${pdf.arquivo}`;
  item.target = "_blank";

  item.innerHTML = `
    <div class="thumb"></div>
    <div class="titulo">${pdf.nome}</div>
  `;

  lista.appendChild(item);
});
