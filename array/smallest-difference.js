// in 1 - [-1, 5, 10, 20, 28, 3]
// in 2 - [26, 134, 135, 15, 17]
// op - 2
// find absoulte difference 2 

function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a,b) => a -b );
    arrayTwo.sort((a,b) => a -b);
    let pair = []
    let idxOne = 0;
    let idxTwo = 0;
    let smallDiff = Infinity;
    let currentDiff = Infinity
    while(idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
        let x = arrayOne[idxOne]
        let y = arrayTwo[idxTwo]
        if(x > y) {
            currentDiff = x - y;
            idxTwo++
        } else if( y > x) {
            currentDiff = y - x;
            idxOne++;
        } else {
            pair = [x, y]
        }
        if(currentDiff < smallDiff) {
            smallDiff = currentDiff;
            pair = [x, y]
        }
    }
    return pair
}