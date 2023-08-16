function getCharacters(done) {

    const results = fetch("https://rickandmortyapi.com/api/character");
    results
        .then(response => response.json())
        .then(data=>{
            done(data)
        });
}

getCharacters(data => {

    data.results.forEach(personaje => {

        const articule = document.createRange().createContextualFragment (/*html*/ `
        <article>
        <div class="image-container">
            <img src="${personaje.image}" alt="Personaje">
            <h2>${personaje.name}</h2>
            <span>${personaje.status}</span>
        </div>
    </article>
    `);
    const main = document.querySelector("main")
    main.append(articule);
    });
});




var currentPage = 1;

document.querySelector(".prev").addEventListener("click", function() {
if (currentPage > 1) {
    currentPage--;
    // Actualizar contenido
    updateContent();
}
});

document.querySelector(".next").addEventListener("click", function() {
if (currentPage < totalPages) {
    currentPage++;
    // Actualizar contenido
    updateContent();
}
});

function updateContent() {
  // Actualizar contenido según la página actual
}





// document.getElementById("myButton").addEventListener("click", function() {
//     alert("¡Haz hecho clic en el botón!");
// });


