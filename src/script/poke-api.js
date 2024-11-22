// Cria um objeto para a API
const PokeApi = {}

// Método para fazer a requisição da url do detalhe dos pokemons
PokeApi.getPokemonsDetail = (pokemon) => {
    // Retorna a requisição e a lista convertida pra json
    return fetch(pokemon.url).then((response) => response.json())
}

// Cria um método para a requisição da API
PokeApi.getPokemons = (a = 0, b = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${a}&limit=${b}`

    return fetch(url)
        // Assim que a requisição for aceita esse código será executado
        // Converte para json
        .then((response) => response.json())

        // Os then são encadeados, então o proximo sempre será retorno do anterior
        // Imprime o json convertido e pega o array
        .then((jsonBody) => jsonBody.results)

        // Vai mapear a lista de detalhes do pokemon
        .then((pokemons) => pokemons.map(PokeApi.getPokemonsDetail))

        // Após mapear os detalhes de cada pokemon, será feito uma lista de requisições
        .then((detailRequests) => Promise.all(detailRequests))

        .then((pokemonDetails) => pokemonDetails)

        // Imprime um erro caso aconteça algum erro
        .catch((error) => console.error(error))
}