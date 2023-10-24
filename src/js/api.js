document.addEventListener("DOMContentLoaded", function () {
    const pokedex = document.getElementById("listaPokemon");
    const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=151"; // 151 Pokémon

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const pokemonList = data.results;

            pokemonList.forEach((pokemon, index) => {
                const pokemonUrl = pokemon.url;
                fetch(pokemonUrl)
                    .then((response) => response.json())
                    .then((pokemonData) => {
                        const pokemonInfo = {
                            number: index + 1,
                            name: pokemonData.name,
                            type: pokemonData.types[0].type.name,
                            types: pokemonData.types.map((type) => type.type.name),
                            photo: pokemonData.sprites.front_default
                        };

                
                        const pokemonHtml = convertPokemonToLi(pokemonInfo);
                        pokedex.innerHTML += pokemonHtml;
                    })
                    .catch((error) => {
                        console.error("Erro ao buscar dados de um Pokémon:", error);
                    });
            });
        })
        .catch((error) => {
            console.error("Erro ao buscar a lista de Pokémon:", error);
        });
});

function convertPokemonToLi(pokemon) {
    return `
        <li class=" cartao-pokemon pokemon ${pokemon.type}">
            <div class="informacoes">
                <span class=" name">${pokemon.name}</span>
                <span class=" number">#${pokemon.number}</span>               
            </div>
            <img src="${pokemon.photo}" class="pokemon-imagem" alt="${pokemon.name}">
            
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class=" tipo type ${type}">${type}</li>`).join('')}
                </ol>
            </div>
        </li>
    `;
}
