// Pegando a tag da lista em HTML
const loadMoreBtn = document.getElementById("loadMoreButton")
const pokemonList = document.getElementById("pokemon")
const limit = 12
let offset = 0

// Pegando os itens da API e injetando no código HTML
function loadPokemonItens(offset, limit) {
    PokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        // Transforma a lista em um HTML
        const newHTML = pokemons.map((pokemon) => `
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
        `).join('')

        /*
            Irá concatenar com a lista mapeada(map) e convertida em uma lista HTML 
            e irá juntar em uma única lista(join) 
        */
        pokemonList.innerHTML += newHTML

    })
}

loadPokemonItens(offset, limit)

nextButton.addEventListener('click', () => {
    offset += limit
    pokemonList.innerHTML = ''
    loadPokemonItens(offset, limit)
})

backButton.addEventListener('click', () => {
    if (offset <= 0) {
        offset = offset
        limit = limit
    } else {
        offset -= limit
        pokemonList.innerHTML = ''
        loadPokemonItens(offset, limit)
    }
})