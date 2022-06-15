// [
//     [1, 2],
//     [3, 5],
//     [4, 7],
//     [6, 8],
//     [9, 10]
//   ]

// output > [
//     [1,2],
//     [3,8],
//     [9,10]
// ]

function mergeOverlappingIntervals(array) {
    sortedArray = array.sort((a,b) => a[0] - b[0])
    const prevPair = sortedArray[0];
    const mergedArray = [prevPair];
    
    for(let pair of sortedArray){
        const [ _ , prevPairEnd] = prevPair;
        const [currentPairStart, currentPairEnd] = pair
        if(prevPairEnd < currentPairStart) {
            prevPair = pair
            mergedArray.push(prevPair)
        } else {
            prevPair[1] = Math.max(prevPairEnd, currentPairEnd)
        }
    }
    return mergedArray;
}