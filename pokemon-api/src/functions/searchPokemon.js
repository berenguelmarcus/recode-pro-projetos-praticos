const fetch = require('node-fetch')

const searchPokemon = async (name, id) => {
    
    if (name == '') {
        var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    } else {
        var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    }

    const pokemonJson = await response.json()

    return pokemonJson
}

module.exports = searchPokemon