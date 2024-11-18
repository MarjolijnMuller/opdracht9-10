import {inventory} from "../../../opdracht les 9/src/constants/inventory.js";
import check from "./assets/check.png";
import minus from "./assets/minus.png";

export function options() {

    const allOptions = inventory.map((tv)=>{
        let option = 0;
        for (let i = 0; i < tv.options.length; i++) {
            option = tv.options[i];
            return option;
        }
        if (option = true) {
            return <li>{check + option}</li>
        }
        if (option = false) {
            return <li>{minus + option}</li>
        }
    })
    return <ul>{allOptions}</ul>

}