document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('meu-formulario');
  const popup = document.getElementById('agradecimento-popup');
  const fecharBotao = document.getElementById('fechar-popup');

  formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário

    fetch(formulario.action, {
      method: 'POST',
      body: new FormData(formulario),
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        console.log("Mensagem enviada com sucesso!");
        // Mostra o balão somente APÓS a confirmação de envio
        popup.classList.add('mostrar');
        // Opcional: limpa o formulário após o envio
        formulario.reset(); 
      } else {
        console.error("Houve um problema com o envio.");
        // Você pode adicionar uma mensagem de erro aqui para o usuário
      }
    })
    .catch(error => {
      console.error("Erro na requisição:", error);
      // Tratar erro para o usuário, se necessário
    });
  });

  // Esconde o balão quando o botão de fechar é clicado
  fecharBotao.addEventListener('click', () => {
    popup.classList.remove('mostrar');
  });

  // Opcional: Esconde o balão ao clicar fora dele
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.remove('mostrar');
    }
  });
});