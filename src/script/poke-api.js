// Cria um objeto para a API
const PokeApi = {}

// Cria um método para a requisição da API
PokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?${offset}&${limit}`

    return fetch(url)
        // Assim que a requisição for aceita esse código será executado
        // Converte para json
        .then((response) => response.json())

        // Os then são encadeados, então o proximo sempre será retorno do anterior
        // Imprime o json convertido e pega o array
        .then((jsonBody) => jsonBody.results)

        .catch((error) => console.error(error))
}