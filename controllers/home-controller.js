import {showHome} from "../views/home-view.js"
import { clean } from "../views/pokemonMenu-view.js";

function init(){
    clean();
    showHome();
}

export default{
    init
}