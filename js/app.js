let amigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById("nome-amigo");
    let listaAmigos = document.getElementById("lista-amigos");

    if (nomeAmigo.value === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (amigos.includes(nomeAmigo.value)){
        alert("Este nome já foi inserido. Insira um nome diferente.");
        return;
    } else {
        amigos.push(nomeAmigo.value);
    }
    
    if(listaAmigos.textContent == "") {
        listaAmigos.textContent = nomeAmigo.value;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ", " + nomeAmigo.value;
    }
    nomeAmigo.value = ""; // para limpar o campo

}

function sortear() {
    if (amigos.length < 3) {
        alert("É necessário ter pelo menos três amigos para realizar o sorteio.");
        return;
    } else {
        embaralha(amigos);
    }   

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