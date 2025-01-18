// lista para los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {

    const input = document.getElementById('amigo');
    const nombreAmigo = input.value;

    //Mensaje si el campo esta vacio
    if (nombreAmigo === '') {
        alert('Por favor, inserta el nombre de un amigo.');
        return;
    }

    // Agregar el nombre del amigo
    amigos.push(nombreAmigo);

    // Crear un nuevo elemento de lista
    const li = document.createElement('li');
    li.textContent = nombreAmigo; 

    // Agregar nombre a la lista
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.appendChild(li);

    // Limpia campo donde se ingresan los nombres
    input.innerHtml = '';
}

//funcion para sortear el nomber del amigo
function sortearAmigo (){
    if(amigos === 0){
        alert('agrega nombre de 1 amigo')
        return;
    }
    //genera nombre aleatorio de la lista 
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //obtiene nombre aleatorio
    const amigoSorteado = amigos[indiceAleatorio]

    //muestra el nombre del amigo 
    const resultadoAleatorio = document.getElementById('resultado')
    resultadoAleatorio.innerHTML= `El amigo sorteado es ${amigoSorteado}`;


}