document.addEventListener('DOMContentLoaded', getRickAndMortyCharacters);

function getRickAndMortyCharacters() {
    const apiUrl = 'https://rickandmortyapi.com/api/character/';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            mostrarPersonajes(data.results);
        })
        .catch(error => console.error('Ha ocurrido un error:', error));
}


function mostrarPersonajes(personajes) {
    if (Array.isArray(personajes)) {
        const resultadoDiv = document.getElementById("personajes"); // Cambiamos el ID del contenedor
        personajes.forEach(personaje => {
            const card = document.createElement("div"); // Usamos un div para la card
            card.classList.add("card"); // Agregamos la clase "card"
            const img = document.createElement("img");
            img.src = personaje.image;
            img.alt = personaje.name;
            card.appendChild(img);

            const content = document.createElement("h1"); // Div para el contenido de la card
            content.textContent = `${personaje.name} `;
            card.appendChild(content);
            resultadoDiv.appendChild(card);
        });
    } else {
        console.error("La variable 'personajes' no es un array:", personajes);
    }
}