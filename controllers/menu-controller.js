import { showMenu , clean } from "../views/pokemonMenu-view.js";
import { fetchAll } from "../services/pokemon-service.js";

function init() {
    fetchAll(showMenu, 1, clean);
}


export default {
    init
}