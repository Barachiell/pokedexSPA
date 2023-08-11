const main = document.getElementById('screen');

let pokemonName = "";

function showPokeSearch() {
    main.id = "screen";
    main.innerHTML = '';
    let pokedexSearchpic = document.createElement('img');
    let searchInput = document.createElement('input');
    //let seeMenu = document.createElement('button');
    searchInput.type = "text";
    searchInput.id = "searchinput"
    searchInput.name = "pokemonname"
    searchInput.pattern = "[A-Za-z]{2,20}"
    //seeMenu.id= "seeMenu";
    //seeMenu.innerText = "See Menu";
    pokedexSearchpic.src = "/resources/pokedexSearch.jpeg"
    pokedexSearchpic.id = "pokesearchpic";
    main.appendChild(pokedexSearchpic);
    main.appendChild(searchInput);
    //main.appendChild(seeMenu);
    enterClicked(searchInput);
}


function enterClicked(input) {
    input.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            pokemonName = input.value;
            window.location.hash = "#pokemon";
        }
    })
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