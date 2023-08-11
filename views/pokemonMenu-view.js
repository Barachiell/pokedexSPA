import { resetPokemonName } from "./pokedexSearch-view.js";

const main = document.getElementById('screen');
let pokemonSprites = document.createElement('div');
pokemonSprites.id = "pokemonSprites";
let pokemonNameFromSprite = "";

function showMenu({name,sprites}){
    let sprite = document.createElement('img');
    sprite.id = name;
    sprite.src = sprites.front_default;
    pokemonSprites.appendChild(sprite);
    main.appendChild(pokemonSprites);
    spriteClick(sprite, "#pokemon")
}

function spriteClick(sprite, hash){
    sprite.onclick = function(){
        resetPokemonName();
        main.innerHTML = '';
        pokemonNameFromSprite = sprite.id;
        window.location.hash = hash;
    }
}

function getPokemonNameFromSprite(){
    return pokemonNameFromSprite;
}

function clean(){
    main.innerHTML = '';
    pokemonSprites.innerHTML= '';
}

export{
    clean,
    showMenu,
    getPokemonNameFromSprite
}