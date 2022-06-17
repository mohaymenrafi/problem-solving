function productSum(array, multiplier = 1) {
    let sum = 0;
    for(let item of array) {
        if(Array.isArray(item)) {
            sum += productSum(item, multiplier + 1)
        } else {
            sum += item;
        }
    }
    return sum * multiplier;
}

let res = productSum([5,2,[7,-1],3,[6,[-13,8],4]])
console.log(res)