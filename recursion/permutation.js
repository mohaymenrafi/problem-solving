// input [ 1, 2, 3]
// output => [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2]]

//first solution with time complexity of upper bound is O(n! * n^2) || and space O(n!)
function getPermutation(array) {
    let permutations = [];
    permutationHelper(array,[],permutations);
    return permutations;
}

function permutationHelper(array,currentPerm, permutations) {
    if(!array.length && currentPerm.length) {
        permutations.push(currentPerm)
    } else {
        for(let i = 0; i< array.length; i++) {
            let newArray = array.filter((_,idx) => idx !==i )
            let newPerm = currentPerm.concat([array[i]])
            permutationHelper(newArray,newPerm, permutations)
        }
    }
}

let res = getPermutation([1,2,3,4])
console.log(res)