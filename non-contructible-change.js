// [1,2,5]  or [5, 7, 1, 1, 2, 3, 22]
// output 4 or 20

function nonConstructibleChange(array) {
    array.sort((a,b) => a - b) // sorting in asec order.
    let minChange = 0;
    for(let num of array) {
        if(num <= minChange + 1) {
            minChange =+ num;
        } else {
            return minChange + 1;
        }
    }
    return minChange + 1;
}