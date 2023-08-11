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

    showBox.id = "pokemonDetails";
    pokemonHeader.id = "pokemon-name";
    pokemonTypes.id = "pokemon-types";
    pokemonType.id = "pokemon-type";
    pokemonTypes.innerHTML = "Type:";
    sprite.id = "pokemon-image";
    pokemonInfo.id = "pokemon-info";
    pokemonHeader.innerHTML = name.charAt(0).toUpperCase() + name.substring(1);
    pokemonType.innerHTML = types[0].type.name;
    if(types[1]){
        pokemonType.innerHTML += "<br> <br>" + types[1].type.name;
    }
    
    pokemonInfo.innerHTML = `Weight: ${weight} kg <br> <br> Height: ${height} ft`;
    
    sprite.src = sprites.front_default;
    showBox.appendChild(pokemonHeader);
    pokemonTypes.appendChild(pokemonType);
    showBox.appendChild(pokemonTypes);
    showBox.appendChild(pokemonInfo)
    showBox.appendChild(sprite);
    main.appendChild(showBox);
}


export{
    showPokemon
}