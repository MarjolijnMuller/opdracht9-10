export function amountStock(tvArray) {
    let countStock = 0;

    for (let i = 0; i < tvArray.length; i++) {
        countStock = countStock + tvArray[i].originalStock;
    }
    return countStock;
}