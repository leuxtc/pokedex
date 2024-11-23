// Cria um objeto para a API
const PokeApi = {}

// Criando um novo objeto pra ter um json apenas com as informações que vai ser usada
function convertPokemonDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon

    pokemon.name = pokeDetail.name
    pokemon.number = pokeDetail.id

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)

    // Array destructing para pegar o primeiro indice da lista types
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.sprite = pokeDetail.sprites.front_default

    return pokemon
}

// Método para fazer a requisição da url do detalhe dos pokemons
PokeApi.getPokemonsDetail = (pokemon) => {
    // Retorna a requisição e a lista convertida pra json
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokemonDetailToPokemon)
}

// Cria um método para a requisição da API
PokeApi.getPokemons = (a = 0, b = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${a}&limit=${b}`

    return fetch(url)
        // Assim que a requisição for aceita esse código será executado
        // Converte para json
        .then((response) => response.json())

        // Os then são encadeados, então o proximo sempre será retorno do anterior
        // Imprime o json convertido e pega a lista do pokemon
        .then((jsonBody) => jsonBody.results)

        // Vai mapear a lista de detalhes do pokemon
        .then((pokemons) => pokemons.map(PokeApi.getPokemonsDetail))

        // Após mapear os detalhes de cada pokemon, será feito uma lista de requisições
        .then((detailRequests) => Promise.all(detailRequests))

        .then((pokemonDetails) => pokemonDetails)

        // Imprime um erro caso aconteça algum erro
        .catch((error) => console.error(error))
}