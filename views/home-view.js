const main = document.getElementById('screen');

function showHome() {
    creatingHomeScreen()
}

function creatingHomeScreen() {
    main.innerHTML = '';
    main.id = "homescreen";
    let divLogo = document.createElement('div');
    divLogo.className = "logo";
    let divIcon = document.createElement('div');
    divIcon.className = "icon";
    let iconPartLeft = document.createElement('div');
    iconPartLeft.className = "icon-part left";
    let iconPartRight = document.createElement('div');
    iconPartRight.className = "icon-part right";
    let nintendoSwitch = document.createElement("h1");
    nintendoSwitch.innerHTML = "<span>Nintendo</span>Switch";
    main.appendChild(divLogo);
    divLogo.appendChild(divIcon);
    divLogo.appendChild(nintendoSwitch);
    divIcon.appendChild(iconPartLeft);
    divIcon.appendChild(iconPartRight);

    let aButton = document.getElementById("abutton");
    onClick(aButton, "pokedexsearch");

    let xButton = document.getElementById("xbutton");
    onClick(xButton, "pokemonGenerations");

    let homeButton = document.getElementById("homeButton");
    onClick(homeButton, "#home");

}

function onClick(button, hash) {
    if(button.id === "xbutton"){
        button.onclick = function(){
            main.id="screen";
            main.innerHTML = "";
            window.location.hash = hash;
        }
    } else {
        button.onclick = function () {
            window.location.hash = hash;
        }
    }
}

export {
    showHome
}




