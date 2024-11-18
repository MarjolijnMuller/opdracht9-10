import {inventory} from "../../../opdracht les 9/src/constants/inventory.js";
import {typeOfTv} from "./typeOfTv.js";

export function tv() {
    const allTv = inventory.map((tv) => {
        return typeOfTv(tv);
    })
}