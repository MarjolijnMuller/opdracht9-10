import {inventory} from "../../../opdracht les 9/src/constants/inventory.js";
import outOfStock from "./assets/out-of-stock.png";


export function soldOut() {
    const soldOut = inventory.filter((tv) =>{
        if (tv.originalStock - tv.sold === 0) {
            return tv + outOfStock;
        }
    })
    console.log(soldOut);
}