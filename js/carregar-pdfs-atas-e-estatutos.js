document.addEventListener("DOMContentLoaded", () => {
  const arquivosAtasEstatuto = [
    { nome: "Ata de Fundação 31/12/2012", arquivo: "ATA-FUNDACAO-31-12-2012.pdf" },
    { nome: "Estatuto Social Atual", arquivo: "ESTATUTO-E-ATA-19-12-2019.pdf" },
    { nome: "Ata Eleição da Diretoria e Conselheiros 14/11/2022", arquivo: "Ata-eleicao-14-11-2022.pdf" },
    { nome: "Ata de Aprovação de Contas de 2021, Alteração da Sede Social e Inclusão do 3º Membro do Conselho Fiscal 06/04/2022", arquivo: "ATA-06-04-2022.pdf" },
    { nome: "Ata de Aprovação de Contas 2019 e 2020, Alteração da Sede Social e Alteração Parcial do Estatuto 24/06/2021", arquivo: "ATA-24-06-2021.pdf" },
    { nome: "Ata Eleição da Diretoria e Conselheiros 22/01/2021", arquivo: "ATA-DE-ELEICAO-22-01-2021.pdf" },
    { nome: "Ata Adequação do Estatuto a Lei de Legislação Esportiva 26/08/2019", arquivo: "Ata-26-08-2019-adequação.pdf" },
    { nome: "Ata Eleição da Diretoria e Conselheiros 14/02/2017", arquivo: "Ata-de-Eleicao-14-02-2017.pdf" }
  ];

  const lista = document.getElementById("lista-pdfs");

  arquivosAtasEstatuto.forEach(pdf => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = `arquivos/atas-e-estatutos/${pdf.arquivo}`;
    link.target = "_blank";
    link.textContent = pdf.nome;
    li.appendChild(link);
    lista.appendChild(li);
  });
});
