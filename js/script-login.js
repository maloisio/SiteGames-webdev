
function salvarLogin(){

    var usuarioLogin = document.getElementById("usuarioLogin");
    var senhaLogin = document.getElementById("senhaLogin");
 


    if (usuarioLogin.value == "" || senhaLogin.value == ""){

        alert("Nao pode haver campos em branco!");

        return;
    }
    else{
        alert("Dados salvos com sucesso!");

    }
}