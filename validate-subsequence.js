// input [5, 1, 22, 25, 6, -1, 8, 10]   ->  [1, 6, -1, 10]  

// output true

function validateSubsequence(array, sequence) {
    let idx = 0;
    for(let i = 0; i< array.length; i++) {
        if(idx === sequence.length) true;
        if(array[i] === sequence[idx]) idx++
    }
    return idx === sequence.length 
}