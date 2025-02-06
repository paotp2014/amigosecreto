let amigos = [];

function agregarAmigo() {

    let nombre = document.getElementById('amigo').value;
    

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    amigos.push(nombre);
    

    document.getElementById('amigo').value = "";
    

    mostrarAmigos();
}


function mostrarAmigos() {

    let lista = document.getElementById('listaAmigos');
    

    lista.innerHTML = "";
    

    for (let i = 0; i < amigos.length; i++) {

        let li = document.createElement('li');
        li.textContent = amigos[i];
        

        lista.appendChild(li);
    }
}


function sortearAmigo() {

    if (amigos.length === 0) {
        alert("No hay amigos disponibles para seleccionar.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    let amigoSorteado = amigos[indiceAleatorio];
    
    document.getElementById('resultado').innerHTML = `El amigo seleccionado es: ${amigoSorteado}`;
}