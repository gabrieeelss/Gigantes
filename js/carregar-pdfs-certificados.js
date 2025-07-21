document.addEventListener("DOMContentLoaded", function () {
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
    { nome: "CRC - Municipal", arquivo: "CRC Municipal.pdf" },
  ];

  const lista = document.getElementById("lista-pdfs");

  pdfs.forEach(pdf => {
    const li = document.createElement("li");
    const link = document.createElement("a");

    link.href = `arquivos/certificados/${pdf.arquivo}`;
    link.target = "_blank";
    link.textContent = pdf.nome;

    li.appendChild(link);
    lista.appendChild(li);
  });
});
