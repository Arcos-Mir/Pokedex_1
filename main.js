const listaPokemon = document.querySelector("#listaPokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for(let i = 1; 1 <= 151; i++) {
    fetch(URL + 1)
        .then((response) => response.json())
        .then(data => console.log(data))
}

function mostrarPokemon(poke) {
    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <p class="pokemon_id_back">#025</p>
        <div class="pokemon_imagen">
            <img src="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/home/25.png?raw=true" alt="">
        </div>
        <div class="pokemon_info">
            <div class="nombre_contenedor">
                <p class="pokemon_id">#025</p>
                <h2 class="pokemon_nombre">${poke.name}</h2>
            </div>
            <div class="pokemon_tipos">
                <p class=" electric tipo">ELECTRIC</p>
                <p class=" fighting tipo">FIGHTING</p>
            </div>
            <div class="pokemon_stats">
                <p class="stat">4m</p>
                <p class="stat">60kg</p>
                </div>
        </div>
    `;
    listaPokemon.append(div);

}