const main = document.getElementById('screen');

let pokemonName = "";

function showPokeSearch() {
    main.id = "screen";
    main.innerHTML = '';

    let pokedexSearchpic = document.createElement('img');
    let searchInput = document.createElement('input');

    searchInput.type = "text";
    searchInput.id = "searchinput"
    searchInput.name = "pokemonname"
    searchInput.pattern = "[A-Za-z]{2,20}"

    pokedexSearchpic.src = "/resources/pokedexSearch.png"
    pokedexSearchpic.id = "pokesearchpic";

    main.appendChild(pokedexSearchpic);
    main.appendChild(searchInput);
    
    setupEnterKeyListener(searchInput);
}


function setupEnterKeyListener(input) {
    input.addEventListener("keyup", handleKeyPress);
}

function handleKeyPress(event){
    if (event.key === "Enter") {
        pokemonName = event.target.value;
        window.location.hash = "#pokemon";
    }
}

function getPokemonName(){
    return pokemonName.toLowerCase();
}

function resetPokemonName(){
    pokemonName = "";
}

export {
    showPokeSearch,
    getPokemonName,
    resetPokemonName
}