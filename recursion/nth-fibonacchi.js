// given a number return corresponding fibonacchi number.
// nth fibo number equation as follows > (n-1) + (n-2)
// 0 & 1 is the first 2 numbers.

// unoptimized solution using simple recursion
// function getNthFib(n) {
//     if(n === 1) return 0;
//     else if(n === 2) return 1;
//     else{
//         return getNthFib(n-1) + getNthFib(n-2)
//     }
// }

// using memoization in recursion
// function getNthFib(n, momoize={1:0,2:1}) {
//     if(n in memoize) return memoize[n]
//     else {
//        memoize[n] = getNthFib(n-1, memoize) + getNthFib(n-2,memoize)
//        return memoize[n]
//     }
// }

// this is the best case solution
function getNthFib(n) {
    let lastTwo = [0,1];
    let counter = 3;
    while(counter<= n) {
        let nextFib= lastTwo[0] + lastTwo[1]
        lastTwo[0] = lastTwo[1]
        lastTwo[1] = nextFib;
        counter++
    }
    return n > 1 ? lastTwo[1] : lastTwo[0];
}