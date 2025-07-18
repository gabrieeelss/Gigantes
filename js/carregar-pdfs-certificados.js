const pdfs = [
  { nome: "CND Municipal", arquivo: "Certidão de Regularidade de Débito de Qualquer Origem CND Municipal - AECS.pdf" },
  { nome: "CND Federal (Receita/PGFN)", arquivo: "Certidão de Regularidade de Débitos Relativos a Créditos Tributários Federais - AECS.pdf" },
  { nome: "CNDT - Certidão Trabalhista", arquivo: "Certidão de Regularidade de Débitos Trabalhistas - CNDT - AECS.pdf" },
  { nome: "CRF - FGTS", arquivo: "Certidão de Regularidade junto ao Fundo de Garantia por Tempo de Serviço - CRF - AECS.pdf" },
  { nome: "CDA - Dívida Ativa Estadual", arquivo: "CERTIDAO DEBITOS DIVIDA ATIVA ECRD - AECS (1).pdf" },
  { nome: "Comprovante CNPJ", arquivo: "Comprovante de Inscrição no Cadastro Nacional de Pessoa Jurídica - AECS.pdf" },
  { nome: "Consulta Apenados TCE-SP", arquivo: "Consulta à relação de apenados do Tribunal de Contas do Estado de São Paulo - AECS.pdf" },
  { nome: "CEIS - Empresas Inidôneas", arquivo: "Consulta de empresas inidôneas e suspensas - CEIS - AECS.pdf" },
  { nome: "Sanções por Fornecedor", arquivo: "Consulta de sanções por fornecedor  - AECS.pdf" },
];

const lista = document.getElementById("lista-pdfs");

pdfs.forEach(pdf => {
  const item = document.createElement("a");
  item.className = "pdf-item";
  item.href = `arquivos/certificados/${pdf.arquivo}`;
  item.target = "_blank";

  item.innerHTML = `
    <div class="thumb"></div>
    <div class="titulo">${pdf.nome}</div>
  `;

  lista.appendChild(item);
});
