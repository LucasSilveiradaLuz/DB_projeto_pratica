let url = "http://localhost:3000/funcionarios"
let nome = document.getElementById("nome").value
let endereco = document.getElementById("endereco").value
let telefone = document.getElementById("telefone").value
let email = document.getElementById("email").value

// /////////////////////////////
// let url2 = "http://localhost:3000/jogos"
// let id2 = document.getElementById("id2");
// let titulos = document.getElementById("titulos");
// let valores = document.getElementById("valores");
// let tipo = document.getElementById("tipo");
// let descricao = document.getElementById("descricao");
// let desenvolvedora = document.getElementById("desenvolvedora");
// let classificacao_etaria = document.getElementById("classificacao_etaria");
// let plataforma = document.getElementById("plataforma");


 const form = document.getElementById("form");
 const lista = document.getElementById("lista");

async function carregaDados (){
      await fetch(url) 

    .then((response) => {
return response.json()
    }
)
    .then((data) => {
        console.log(data)
          
for(let i = 0; i < data.length; i++){
  console.log(data[i])
  const li = document.createElement("li");
    li.innerHTML = `${data[i].nome} - ${data[i].email}`;
    lista.appendChild(li);
}
         lista.innerHTML = "";
    })
    .catch((error) => {
      console.log("Erro no carregamento do banco de dados: " + error);
    })


}
//Função para enviar novo usuário
form.addEventListener("submit", async (e) => {
  e.preventDefault();


  await fetch("/funcionarios", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, endereco, telefone, email }), // manda o objeto js para o banco como json
  });

  form.reset(); // limpa os campos com a função nativa para tags form
  carregaDados(); // atualiza lista
});
// Carrega ao abrir a página
carregaDados();

 
 

     
      

      