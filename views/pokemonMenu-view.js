import { resetPokemonName } from "./pokedexSearch-view.js";

const main = document.getElementById('screen');
let pokemonSprites = document.createElement('div');
pokemonSprites.id = "pokemonSprites";
let pokemonNameFromSprite = "";
let generationId = "";

function showMenu({name,sprites}){
    let sprite = createSprite(name, sprites.front_default);
    pokemonSprites.appendChild(sprite);
    main.appendChild(pokemonSprites);
    spriteClick(sprite, "#pokemon")
}

function createSprite(pokemonName, src){
    let sprite = document.createElement('img');
    sprite.id = pokemonName;
    sprite.src = src;
    return sprite;
}


function spriteClick(sprite, hash){
    sprite.onclick = function(){
        resetPokemonName();
        main.innerHTML = '';
        pokemonNameFromSprite = sprite.id;
        window.location.hash = hash;
    }
}


function showGenerationButtons(){
    pokemonSprites.innerHTML = "";
    main.innerHTML = "";
    const generationNames = ["Gen 1", "Gen 2", "Gen 3", "Gen 4", "Gen 5", "Gen 6", "Gen 7", "Gen 8", "Gen 9"];

    let generationButtonContainer = document.createElement('div');
    generationButtonContainer.className = "generation-buttons";
    
    for (let i = 1; i <= generationNames.length; i++) {
        let genButton = createGenerationButton(`gen${i}`, generationNames[i - 1])
        generationButtonContainer.appendChild(genButton);
        generationClick(genButton, "#pokemonMenu")
    }
    main.appendChild(generationButtonContainer);

}

function createGenerationButton(generation, text){
    let genButton = document.createElement("div");
    genButton.id = generation;
    genButton.textContent = text;
    return genButton;
}


function generationClick(genButton,hash){
    genButton.onclick = function(){
        main.innerHTML = "";
        generationId = genButton.id;
        window.location.hash = hash;
    }
    
}

function getPokemonNameFromSprite(){
    return pokemonNameFromSprite;
}

function getGenerationId(){
    return generationId;
}

function clean(){
    main.innerHTML = '';
    pokemonSprites.innerHTML= '';
}

export{
    clean,
    showMenu,
    getPokemonNameFromSprite,
    showGenerationButtons,
    getGenerationId
}