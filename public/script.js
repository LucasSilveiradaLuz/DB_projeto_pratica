let url = "http://localhost:3000/funcionarios"; // URL para obter os dados dos funcionários
const form = document.getElementById("form");
const lista = document.getElementById("lista"); // Lista onde os funcionários serão adicionados

// Função para carregar funcionários
async function carregaDados() {
  // Fazendo uma requisição GET para buscar os funcionários
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      lista.innerHTML = ""; // Limpar a lista antes de adicionar os dados
      data.forEach((funcionario) => {
        // Criar um <li> para cada funcionário
        const li = document.createElement("li");
        
        // Adicionar o nome e email do funcionário dentro do <li>
        li.innerHTML = `
          <strong>Nome:</strong> <span>${funcionario.nome}</span><br>
          <strong>Endereço:</strong> <span>${funcionario.endereco}</span><br>
          <strong>Telefone:</strong> <span>${funcionario.telefone}</span><br>
          <strong>Email:</strong> <span>${funcionario.email}</span>
        `;
        
        // Adicionar o <li> na lista
      const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Excluir";
  
    botaoRemover.classList.add("btn")
    botaoRemover.classList.add("btn-dark")

    botaoRemover.addEventListener("click", async () => {
      if (confirm(`Deseja realmente remover ${funcionario.nome}?`)) {
        const resposta = await fetch(`/funcionarios/${funcionario.id}`, { method: "DELETE" });
        if (resposta.ok) {
          carregaDados()
          console.log("ok");
        } else {
          alert("Erro ao remover usuário!");
        }
      }
    })
        lista.appendChild(li);
        li.appendChild(botaoRemover)
      });
    })
    .catch((error) => {
      console.log("Erro no carregamento do banco de dados: " + error);
    });
}

// Função para enviar um novo funcionário
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Impede o comportamento padrão de envio do formulário

  // Captura os dados do formulário
  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;

  // Envia os dados para a API via POST
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, endereco, telefone, email }), // Dados do novo funcionário
  });

  form.reset(); // Limpa os campos do formulário
  carregaDados(); // Atualiza a lista de funcionários
});

   
    // });


// Carrega os dados ao abrir a página
carregaDados();