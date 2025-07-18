const pdfs = [
  { nome: "Proposta Edital 03/2020", arquivo: "Proposta edital 03-2020.pdf" },
  { nome: "Plano de Trabalho Edital 03/2020", arquivo: "plano de trabalho edital 03-2020pdf" },
  { nome: "Termo de Fomento Edital 01/2021", arquivo: "termo de fomento edital 01-2021.pdf" },
  { nome: "Proposta Edital 01/2021", arquivo: "proposta edital 01-2021.pdf" },
  { nome: "Termo de Fomento Edital 04/2022", arquivo: "termo de fomento 04-2022.pdf" },
  { nome: "Plano de Trabalho Edital 04/2022", arquivo: "Plano de trabalho 04-2022.pdf" },
  { nome: "Termo de Fomento Edital 01/2024", arquivo: "Termo de Fomento 01-2024.pdf" },
  { nome: "Plano de Trabalho Edital 01/2024", arquivo: "plano de trabalho 01-2024.pdf" },
  
];

const lista = document.getElementById("lista-pdfs");

pdfs.forEach(pdf => {
  const item = document.createElement("a");
  item.className = "pdf-item";
  item.href = `arquivos/fiec/${pdf.arquivo}`;
  item.target = "_blank";

  item.innerHTML = `
    <div class="thumb"></div>
    <div class="titulo">${pdf.nome}</div>
  `;

  lista.appendChild(item);
});
