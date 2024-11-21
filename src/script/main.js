// Transforma em um HTML
function convertPokemonToLi(pokemon) {
    return `
            <li class="pokedex">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="type">
                        <li class="types">Grass</li>
                        <li class="types">Poison</li>
                    </ol>
                    
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}" srcset="">
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