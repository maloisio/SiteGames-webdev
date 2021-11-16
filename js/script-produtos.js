var listaprodutos = [];

if(window.localStorage.getItem("produtos") != null){

    listaprodutos = JSON.parse(window.localStorage.getItem("produtos"));
}

function adicionarprod(clicked_id) {

    if(clicked_id == 'gamecyberpunk'){
        listaprodutos.push(clicked_id);
    }
    if (clicked_id == 'gamebattlefield2042') {
        listaprodutos.push(clicked_id);
    }
    if (clicked_id == 'gamedmc') {
        listaprodutos.push(clicked_id);
    }
    if (clicked_id == 'gamegodofwar') {
        listaprodutos.push(clicked_id);
    }
    if (clicked_id == 'gamenewworld') {
        listaprodutos.push(clicked_id);
    }
    if (clicked_id == 'gamefifa22') {
        listaprodutos.push(clicked_id);
    }
    if (clicked_id == 'gameforza5') {
        listaprodutos.push(clicked_id);
    }
 
        window.localStorage.setItem("produtos", JSON.stringify(listaprodutos));
}