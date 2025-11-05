let url = "http://localhost:3000/funcionarios"
let id = document.getElementById("id").value
let nome = document.getElementById("nome")
let endereco = document.getElementById("endereco")
let telefone = document.getElementById("telefone")
let email = document.getElementById("email")
let salario = document.getElementById("salario")
async function carregaDados (){
     await fetch(url) 

    .then((response) => {
return response.json()
    }
)
    .then((data) => {
        console.log(data)

        id.innerHTML = data[0].id
        nome.innerHTML = data[1].nome 
        endereco.innerHTML = data[2].endereco
        telefone.innerHTML = data[3].telefone
        email.innerHTML = data[4].email
        salario.innerHTML = data[5].salario
    })
    .catch((error) => {
      console.log("Erro no carregamento do banco de dados: " + error);
    })
}
carregaDados()