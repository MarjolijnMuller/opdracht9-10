export function amountSold(tvArray){
    let countSold = 0;

    for (let i = 0; i < tvArray.length; i++) {
        countSold = countSold + tvArray[i].sold;
    }
    return countSold;
}