import { showMenu, clean, showGenerationButtons, getGenerationId } from "../views/pokemonMenu-view.js";
import { fetchAll } from "../services/pokemon-service.js";

/* Pokemon Ids through Generations
Gen1 = 1 - 151
Gen2 = 152 - 251
Gen3 = 252 - 386
Gen4 = 387 - 493
Gen5 = 494 - 649
Gen6 = 650 - 721
Gen7 = 722 - 809
Gen8 = 810 - 905
Gen9 = 906 - 1010 (in theory is more than 1015 but the API only goes until 1010)
*/

function init() {
    switch (getGenerationId()) {
        case "gen1":
            fetchAll(showMenu, 1, 151);
            break;
        case "gen2":
            fetchAll(showMenu, 152, 251);
            break;
        case "gen3":
            fetchAll(showMenu, 252, 386);
            break;
        case "gen4":
            fetchAll(showMenu, 387, 493);
            break;
        case "gen5":
            fetchAll(showMenu, 494, 649);
            break;
        case "gen6":
            fetchAll(showMenu, 650, 721);
            break;
        case "gen7":
            fetchAll(showMenu, 722, 809);
            break;
        case "gen8":
            fetchAll(showMenu, 810, 905);
            break;
        case "gen9":
            fetchAll(showMenu, 906, 1010);
            break;
    }
}


export default {
    init
}