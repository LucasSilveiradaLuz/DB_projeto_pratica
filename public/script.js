let url = "http://localhost:3000/funcionarios"
let id = document.getElementById("id")
let nome = document.getElementById("nome")
let endereco = document.getElementById("endereco")
let telefone = document.getElementById("telefone")
let email = document.getElementById("email")
let salario = document.getElementById("salario")
/////////////////////////////
let url2 = "http://localhost:3000/jogos"
let id2 = document.getElementById("id2");
let titulos = document.getElementById("titulos");
let valores = document.getElementById("valores");
let tipo = document.getElementById("tipo");
let descricao = document.getElementById("descricao");
let desenvolvedora = document.getElementById("desenvolvedora");
let classificacao_etaria = document.getElementById("classificacao_etaria");
let plataforma = document.getElementById("plataforma");

async function carregaDados (){
     await fetch(url) 

    .then((response) => {
return response.json()
    }
)
    .then((data) => {
        console.log(data)

         let funcionario = data[0];

      id.innerHTML = funcionario.id;
      nome.innerHTML = funcionario.nome;
      endereco.innerHTML = funcionario.endereco;
      telefone.innerHTML = funcionario.telefone;
      email.innerHTML = funcionario.email;
      salario.innerHTML = funcionario.salario;
    })
    .catch((error) => {
      console.log("Erro no carregamento do banco de dados: " + error);
    })
    await fetch(url2) 

    .then((response) => {
return response.json()
    }
)
    .then((data) => {
        console.log(data)

let jogo = data[0];

      id2.innerHTML = jogo.id;
      titulos.innerHTML = jogo.titulos;
      valores.innerHTML = jogo.valores;
      tipo.innerHTML = jogo.tipo;
      descricao.innerHTML = jogo.descricao;
      desenvolvedora.innerHTML = jogo.desenvolvedora;
      classificacao_etaria.innerHTML = jogo.classificacao_etaria;
      plataforma.innerHTML = jogo.plataforma;

    })
    .catch((error) => {
      console.log("Erro no carregamento do banco de dados: " + error);
    })

}

  
carregaDados()