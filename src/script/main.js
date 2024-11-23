// Transforma a lista em um HTML
function convertPokemonToLi(pokemon) {
    return `
            <li class="pokedex ${pokemon.type}">
                <span class="number">#00${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="type">
                        ${pokemon.types.map((type) => `<li class="types ${type}">${type}</li>`).join('')}
                    </ol>
                    
                    <img class="sprite" src="${pokemon.sprite}" alt="${pokemon.name}" srcset="">
                </div>
            </li>
        `
}

// Pegando a tag da lista 
const pokemonList = document.getElementById("pokemon")

// Pegando os itens da API e injetando no código HTML
PokeApi.getPokemons() .then((pokemons = []) => {
    /*
        Irá concatenar com a lista mapeada(map) e convertida em uma lista HTML 
        e irá juntar em uma única lista(join) 
    */
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')

})