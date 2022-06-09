// sample input [3, 5, -4, 8, 11, 1, -1, 6] target sum  = 10
// sample output [-1 ,11]

function twoNumberSum(arr, targetSum) {
    const numbers = {};
    for(let x of arr) {
        const y = targetSum - x;
        if(y in numbers) {
            return [ x, y]
        } else {
            numbers[y] = true;
        }
    }
    return []
}



