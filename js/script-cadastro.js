
function salvarCadastro(){

    var usuario = document.getElementById("usuario");
    var senha = document.getElementById("senha");
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var endereco = document.getElementById("endereco");


    if (usuario.value == "" || senha.value == "" || nome.value == "" || sobrenome.value == "" || endereco.value == ""){

        alert("Nao pode haver campos em branco!");

        return;
    }
    else{
        alert("Dados salvos com sucesso!");

    }
}