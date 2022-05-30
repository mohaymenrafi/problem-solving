// [1,2,3,4,5,6,8,9]
// [1,4,9,16,25,36,81]

function sortedSquareArray(array) {
    let result = new Array(array.length - 1 ).fill(0);
    let left = 0;
    let right = array.length -1 ;
    for(let i = array.length -1 ; i>= 0; i--) {
        let x = array[left]
        let y = array[right]
        if(Math.abs(x) > Math.abs(y) ) {
            result[i] = x * x;
            left++
        } else {
            result[i] = y * y;
            right--
        }
    }
}