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

    const generationRanges = {
        "gen1":[1,151],
        "gen2":[152,251],
        "gen3":[252,386],
        "gen4":[387,493],
        "gen5":[494,649],
        "gen6":[650,721],
        "gen7":[722,809],
        "gen8":[810,905],
        "gen9":[906,1010] //(in theory is more than 1015 but the API only goes until 1010)
    }

    let generationId = getGenerationId();
    let range = generationRanges[generationId];

    if(range){
        fetchAll(showMenu, range[0], range[1]);
    }

}

export default {
    init
}