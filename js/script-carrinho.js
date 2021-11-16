window.onload = function(){

    var listaProdutos = JSON.parse(window.localStorage.getItem("produtos"));

    for(var i = 0; i < listaProdutos.lenght; i++){
        document.getElementById("divProdutos").innerHTML += listaProdutos[i] + "<br>";
    }

}