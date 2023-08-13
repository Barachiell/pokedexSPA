const main = document.getElementById('screen');


function showPokemon({name,sprites,types, weight, height}){
    main.id = "screen";
    main.innerHTML = '';
    let showBox = document.createElement('div');
    let pokemonHeader = document.createElement('div');
    let pokemonTypes = document.createElement('div');
    let pokemonType = document.createElement('div');
    let sprite = document.createElement("img");
    let pokemonInfo = document.createElement('div');
    let divForTheTypes = document.createElement('div');

    divForTheTypes.id = "div-for-the-types";
    showBox.id = "pokemonDetails";
    pokemonHeader.id = "pokemon-name";
    pokemonTypes.id = "pokemon-types";
    pokemonType.className = "pokemon-type";
    pokemonTypes.innerHTML = "Type:";
    sprite.id = "pokemon-image";
    pokemonInfo.id = "pokemon-info";
    pokemonHeader.innerHTML = name.charAt(0).toUpperCase() + name.substring(1);
    pokemonType.innerHTML = types[0].type.name;
    if(types[1]){
        divForTheTypes.innerHTML += `<div class="pokemon-type"> ${types[1].type.name} </div>`;
    }
    
    pokemonInfo.innerHTML = `Weight: ${(weight/10).toFixed(1)} kg <br> <br> Height: ${height} ft`;
    
    sprite.src = sprites.front_default;
    showBox.appendChild(pokemonHeader);
    divForTheTypes.appendChild(pokemonType);
    pokemonTypes.appendChild(divForTheTypes);
    showBox.appendChild(pokemonTypes);
    showBox.appendChild(pokemonInfo)
    showBox.appendChild(sprite);
    main.appendChild(showBox);
}


export{
    showPokemon
}