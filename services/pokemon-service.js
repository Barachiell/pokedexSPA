
const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

const FIRST_151POKEMONS = "https://pokeapi.co/api/v2/pokemon/?offset=1&limit=151";




//make the request to Pokemon API and run the callback method
function fetchPokemon(pokemonName, callback) {
    fetch(`${API_URL}${pokemonName}`).then(response => response.json()).then(callback).catch(
        function(){
            window.location.hash = '#pokedexsearch'
        }
    );
}

function fetchAll(callback, i, lastPokemon) {
    const number = lastPokemon;
    fetch(API_URL + i).then(response => response.json()).then((pokemon) => {
        callback(pokemon);
        if (i < number) {
            fetchAll(callback, i + 1, lastPokemon);
        }

    });
}


// always export an object that can have properties, so what I want to be used elsewhere, whatever I want
// still need to import on the file that will then use 
export {
    fetchPokemon,
    fetchAll
}