export function sizeTV(tv) {
    let sizeTV = [];
    for (let i = 0; i < tv.availableSizes.length; i++) {
        let sizeInch = tv.availableSizes[i];
        let sizeCm = sizeInch * 2.54;
        sizeTV.push(sizeInch + " inch (" + sizeCm + " cm)")

        if (tv.availableSizes[i+1]) {
            sizeTV.push(" | ");
        }
    }
    return sizeTV;
}