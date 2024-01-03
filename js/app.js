let amigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById("nome-amigo");
    let listaAmigos = document.getElementById("lista-amigos");
    amigos.push(nomeAmigo.value);
    if(listaAmigos.textContent == "") {
        listaAmigos.textContent = nomeAmigo.value;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ", " + nomeAmigo.value;
    }
    nomeAmigo.value = ""; // para limpar o campo

}

function sortear() {
    embaralha(amigos);
    let listaSorteio = document.getElementById("lista-sorteio");

        for (let i = 0; i < amigos.length; i++) {

            if(i == amigos.length - 1){ //que significa que o indice chegou no final do array
                listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + "--> " + amigos[0] + "<br>";
            } else {
                listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + "--> " + amigos[i+1] + "<br>";
            //amigos[i+1] é o amigo que está na próxima posição
            //<br> para ir para a linha abaixo no html
            }      
    }    
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
}