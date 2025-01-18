<h1>amigo-secreto</h1> 

  - challege para el programa de one experience de oracle


Mi codigo se divide en tres partes:

1) la primera que es crear una lista vacia donde se agregaran los nombres

    ```let amigos = [];```

2) La segunda donde se genera la funcion que agregara los nombres a la lista, y se visualizaran en la pagina.

    ```
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
}```

![image](https://github.com/user-attachments/assets/1f016719-c042-49f6-bac4-93b446e0a777)

3) La tercera parte se genera una segunda funcion en donde al usar el botom sortear, eligira unos de los nombres agregados de manera aleatoria y lo mostrara en la pagina

```
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
```

![image](https://github.com/user-attachments/assets/7548e27a-1d08-4bb2-b9d0-1cf6ea920dd1)
