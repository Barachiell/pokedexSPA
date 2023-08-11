import { fetchPokemon } from "../services/pokemon-service.js";
import { showPokemon } from "../views/pokemon-view.js";
import { getPokemonName } from "../views/pokedexSearch-view.js";
import { getPokemonNameFromSprite } from "../views/pokemonMenu-view.js";

function init() {
    
    if(getPokemonName() === ""){
        fetchPokemon(getPokemonNameFromSprite(), showPokemon);
    }else {
        fetchPokemon(getPokemonName(), showPokemon);
    }
}


export default {
    init
}