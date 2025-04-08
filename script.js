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
        const resultadoDiv = document.getElementById("personajes");
        resultadoDiv.innerHTML = ''; // Clear loading message
        
        personajes.forEach(personaje => {
            const card = document.createElement("div");
            card.classList.add("card");
            
            const img = document.createElement("img");
            img.src = personaje.image;
            img.alt = personaje.name;
            card.appendChild(img);
            
            const content = document.createElement("h1");
            content.textContent = personaje.name;
            card.appendChild(content);
            
            resultadoDiv.appendChild(card);
        });
    } else {
        console.error("La variable 'personajes' no es un array:", personajes);
    }
}