// let url = "http://localhost:3000/funcionarios"
// let id = document.getElementById("id")
// let nome = document.getElementById("nome")
// let endereco = document.getElementById("endereco")
// let telefone = document.getElementById("telefone")
// let email = document.getElementById("email")
// let salario = document.getElementById("salario")
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



// async function carregaDados (){
//      await fetch(url) 

//     .then((response) => {
// return response.json()
//     }
// )
//     .then((data) => {
//         console.log(data)
       
//          let funcionario = data[0];
      
//       id.innerHTML = funcionario.id;
//       nome.innerHTML = funcionario.nome;
//       endereco.innerHTML = funcionario.endereco;
//       telefone.innerHTML = funcionario.telefone;
//       email.innerHTML = funcionario.email;
//       salario.innerHTML = funcionario.salario;
//     })
//     .catch((error) => {
//       console.log("Erro no carregamento do banco de dados: " + error);
//     })
//     await fetch(url2) 

//     .then((response) => {
// return response.json()
//     }
// )
//     .then((data) => {
//         console.log(data)

// let jogo = data[0];

//       id2.innerHTML = jogo.id;
//       titulos.innerHTML = jogo.titulos;
//       valores.innerHTML = jogo.valores;
//       tipo.innerHTML = jogo.tipo;
//       descricao.innerHTML = jogo.descricao;
//       desenvolvedora.innerHTML = jogo.desenvolvedora;
//       classificacao_etaria.innerHTML = jogo.classificacao_etaria;
//       plataforma.innerHTML = jogo.plataforma;

//     })
//     .catch((error) => {
//       console.log("Erro no carregamento do banco de dados: " + error);
//     })

// }
// function MostrarDados (){
//   let button = document.getElementById("button")
//    let funcionario = data[0];
// if(button = true ){
     
//        id.innerHTML = funcionario.id;
//       nome.innerHTML = funcionario.nome;
//       endereco.innerHTML = funcionario.endereco;
//       telefone.innerHTML = funcionario.telefone;
//       email.innerHTML = funcionario.email;
//       salario.innerHTML = funcionario.salario;
// }
// }
  
// carregaDados()
let url = "http://localhost:3000/funcionarios";
let url2 = "http://localhost:3000/jogos";

// elementos da tela
let id = document.getElementById("id");
let nome = document.getElementById("nome");
let endereco = document.getElementById("endereco");
let telefone = document.getElementById("telefone");
let email = document.getElementById("email");
let salario = document.getElementById("salario");

let id2 = document.getElementById("id2");
let titulos = document.getElementById("titulos");
let valores = document.getElementById("valores");
let tipo = document.getElementById("tipo");
let descricao = document.getElementById("descricao");
let desenvolvedora = document.getElementById("desenvolvedora");
let classificacao_etaria = document.getElementById("classificacao_etaria");
let plataforma = document.getElementById("plataforma");

let button = document.getElementById("button");

// variáveis globais para guardar os dados carregados
let funcionarios = [];
let jogos = [];

// controle de exibição
let dadosVisiveis = false;

// busca os dados (mas não mostra ainda)
async function carregaDados() {
  try {
    const response1 = await fetch(url);
    funcionarios = await response1.json();

    const response2 = await fetch(url2);
    jogos = await response2.json();

    console.log("Dados carregados com sucesso!");
  } catch (error) {
    console.log("Erro ao carregar dados:", error);
  }
}

// exibe ou esconde os dados
function MostrarDados() {
  if (funcionarios.length === 0 || jogos.length === 0) {
    alert("Os dados ainda não foram carregados!");
    return;
  }

  if (!dadosVisiveis) {
    // mostrar dados
    let funcionario = funcionarios[0];
    id.innerHTML = `ID: ${funcionario.id}`;
    nome.innerHTML = `Nome: ${funcionario.nome}`;
    endereco.innerHTML = `Endereço: ${funcionario.endereco}`;
    telefone.innerHTML = `Telefone: ${funcionario.telefone}`;
    email.innerHTML = `Email: ${funcionario.email}`;
    salario.innerHTML = `Salário: ${funcionario.salario}`;

    let jogo = jogos[0];
    id2.innerHTML = `ID: ${jogo.id}`;
    titulos.innerHTML = `Título: ${jogo.titulos}`;
    valores.innerHTML = `Valor: ${jogo.valores}`;
    tipo.innerHTML = `Tipo: ${jogo.tipo}`;
    descricao.innerHTML = `Descrição: ${jogo.descricao}`;
    desenvolvedora.innerHTML = `Desenvolvedora: ${jogo.desenvolvedora}`;
    classificacao_etaria.innerHTML = `Classificação Etária: ${jogo.classificacao_etaria}`;
    plataforma.innerHTML = `Plataforma: ${jogo.plataforma}`;

    button.textContent = "Esconder Dados";
    dadosVisiveis = true;
  } else {
    // esconder dados
    id.innerHTML = "";
    nome.innerHTML = "";
    endereco.innerHTML = "";
    telefone.innerHTML = "";
    email.innerHTML = "";
    salario.innerHTML = "";
    id2.innerHTML = "";
    titulos.innerHTML = "";
    valores.innerHTML = "";
    tipo.innerHTML = "";
    descricao.innerHTML = "";
    desenvolvedora.innerHTML = "";
    classificacao_etaria.innerHTML = "";
    plataforma.innerHTML = "";

    button.textContent = "Mostrar Dados";
    dadosVisiveis = false;
  }
}

// carrega os dados assim que a página abre
carregaDados();
