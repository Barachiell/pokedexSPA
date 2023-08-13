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
    sprite.id = "pokemon-image";
    pokemonInfo.id = "pokemon-info";
    pokemonType.className = "pokemon-type";
    
    sprite.src = sprites.front_default;
    pokemonTypes.innerHTML = "Type:";
    pokemonHeader.innerHTML = capitalizeFirstLetter(name);
    pokemonType.innerHTML = types[0].type.name;
    pokemonType.id = types[0].type.name;
    pokemonInfo.innerHTML = `Weight: ${(weight/10).toFixed(1)} kg <br> <br> Height: ${height} ft`;
    
    if(types[1]){
        divForTheTypes.innerHTML += `<div class="pokemon-type" id="${types[1].type.name}"> ${types[1].type.name} </div>`;
    }
    
    showBox.appendChild(pokemonHeader);
    divForTheTypes.appendChild(pokemonType);
    pokemonTypes.appendChild(divForTheTypes);
    showBox.appendChild(pokemonTypes);
    showBox.appendChild(pokemonInfo)
    showBox.appendChild(sprite);
    main.appendChild(showBox);
}

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.substring(1);
}


export{
    showPokemon
}