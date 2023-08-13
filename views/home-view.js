const main = document.getElementById('screen');

function showHome() {
    creatingHomeScreen()
    setUpEventListeners();
}

function creatingHomeScreen() {
    main.innerHTML = '';
    main.id = "homescreen";
    main.innerHTML= `
    <div class="logo">
        <div class="icon">
            <div class="icon-part left"></div>
            <div class="icon-part right"></div>
        </div>
        <h1><span>Nintendo</span>Switch</h1>
    </div>        
    `
}

function setUpEventListeners(){
    let aButton = document.getElementById("abutton");
    let xButton = document.getElementById("xbutton");
    let homeButton = document.getElementById("homeButton");
    
    onClick(aButton, "pokedexsearch");
    onClick(xButton, "pokemonGenerations");
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

/* IF CREATING HOME SCREEN WAS MADE ELEMENT BY ELEMENT
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
*/



