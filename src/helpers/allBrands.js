import {inventory} from "../../../opdracht les 9/src/constants/inventory.js";

export function allBrands() {
    const brands = inventory.map((tv) => {
        return tv.brand;
    });
}