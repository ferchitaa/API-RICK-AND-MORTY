function Characters(done) {
  const URL = "https://rickandmortyapi.com/api/character";

  fetch(URL)
    .then(response => response.json())
    .then(data => {
      done(data)
    })
}

Characters(data => {
  data.results.forEach(personaje => {

    const article = document.createRange().createContextualFragment(`

        <article class="card">

        <div class="image-container">
          <img src="${personaje.image}" alt="${personaje.name}">
        </div>
        

        <div class="name">
        <h2>${personaje.name}</h2>
        
        <span>${personaje.status}</span>
        </div>

        </article>

        `);

    const main = document.querySelector("main");

    main.append(article);

  });
});



document.addEventListener("keydown", e=>{

  if (e.target.matches("#buscador")){

      if (e.key ==="Escape")e.target.value = ""

      document.querySelectorAll(".card").forEach(buscar =>{

          buscar.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?buscar.classList.remove("filtro")
            :buscar.classList.add("filtro")
      })
  }
});