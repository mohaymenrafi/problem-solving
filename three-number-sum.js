//[12, 3, 1, 2, -6, 5, -8, 6] target sum = 0
// return the triplets and results should be sorted
//[[-8,2,6],[-8,3,5],[-6,1,5]]

// optimized solution n^2

function threeNumberSum(array, targetSum) {
    array.sort((a,b) => a - b)
    const result = []
    for(let i = 0; i<array.length - 2; i++) {
        let firstNum = array[i]
        let left = i + 1;
        let right = array.length - 1;
        while(left < right ) {
            let currentSum = firstNum + array[left] + array[right]
            if(currentSum > targetSum ) {
                right--;
            } else if(currentSum < targetSum) {
                left++;
            } else {
                result.push([firstNum, array[left], array[right]]);
                left++;
                right--;
            }
        } 
    }
    return result;
}