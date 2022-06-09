// input -> [5,1,4,2]
// output -> [8,40,10,20]

//basically in the first loop we calculate all the products of left of the current index number in the resulting array.
// and in the second loop, we calculated the products of the right side of the numbers and multiplied them wity left side resulting array, to the final result.



function arrayOfProducts(array) {
    let products = new Array(array.length).fill(1);
    
    let leftRunningProduct = 1;
    for(let i = 0; i<array.length; i++) {
        products[i] *= leftRunningProduct; 
        leftRunningProduct *= array[i] 
    }
    let rightRunningProduct = 1;
    for(let i = array.length -1 ; i>=0; i--) {
        products[i] *= rightRunningProduct;
        rightRunningProduct *= array[i]
    }

    return products;
}