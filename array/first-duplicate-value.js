// input > [2, 1, 5, 2, 3, 3, 4]
// output => 2

// sidenote> given array numbers are between 1 to n where n is the length of the array and we can mutate/ modify the array.
//if no duplicate found then return -1
function firstDuplicateValue(array) {
    for(const num of array) {
        let idx = Math.abs(num) - 1;
        if(array[idx] < 0) return Math.abs(num);
        array[idx] *= -1;
    }
    return -1;
}