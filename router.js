import homeController from "./controllers/home-controller.js";
import pokemonController from "./controllers/pokemon-controller.js";
import pokedexSearchController from "./controllers/pokedexsearch-controller.js"
import menuController from "./controllers/menu-controller.js"
import generationsController from "./controllers/generations-controller.js"

//dinamic- polimorphism
const routes = {
    home: {
        hash: "#home",
        controller: homeController
    },
    pokedexSearch: {
        hash: "#pokedexsearch",
        controller: pokedexSearchController
    },
    pokemon:{
        hash:'#pokemon',
        controller:pokemonController 
    },
    menu:{
        hash:'#pokemonMenu',
        controller:menuController 
    },
    generations:{
        hash:'#pokemonGenerations',
        controller:generationsController 
    }
}

window.onhashchange = function(){
    //Object.values transforms the object into an array
    let route = Object.values(routes).find(route => route.hash === window.location.hash);

    if(!route){
        window.location.hash = '#home';
    }
    route.controller.init();
}

window.location.hash = 'home';


//non dinamic
/* window.onhashchange = function () {
 
    switch (window.location.hash) {
        case '#hackathon':
            hackathonController.init();
            break;
            case '#homepage':
                triviaController.init();
                break;
        default:
            triviaController.init();
        }
    } */

//loads this first, the first thing to run
