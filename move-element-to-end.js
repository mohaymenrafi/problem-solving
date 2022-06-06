// input [2, 1, 2, 2, 2, 3, 4, 2] , toMove = 2;
// output [4,3,1,2,2,2,2,2]
function moveElementToEnd(array, toMove) {
    let leftIdx = 0;
    let rightIdx = array.length - 1;
    while(leftIdx < rightIdx) {
        while(leftIdx < rightIdx && array[rightIdx] === toMove) rightIdx--;
        if(array[leftIdx] === toMove) {
            swap(array, leftIdx, rightIdx)
        }
        leftIdx++;
    } 
    return array;
}

function swap(array, left, right) {
    let temp = array[right];
    array[right] = array[left]
    array[left] = temp;
 } 