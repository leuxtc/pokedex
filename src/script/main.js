
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon/?${offset}&${limit}`

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

const pokemonList = document.getElementById("pokemon")

// Retorna uma promise
fetch(url)
    // Assim que a requisição for aceita esse código será executado
    // Converte para json
    .then((response) => response.json())

    // Os then são encadeados, então o proximo sempre será retorno do anterior
    // Imprime o json convertido e pega o array
    .then((jsonBody) => jsonBody.results)

    //Imprime a lista dos pokemons
    .then((pokemons) => {
        // debugger
        
        for (let i = 0; i < pokemons.length; i++) {            
            const pokemon = pokemons[i]
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
        }

    })

    // Código caso a requisição de erro
    .catch((error) => console.log(error))

    // Será executado independente do resultado da requisição
    .finally(() => console.log('Requisição concluida'))