// sample input
//[1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
// peak must have at least 3 numbers
// sample output -> 6
function longestPeak(array) {
    let longestPeakLength = 0;
    let i = 1;
    while(i < array.length - 1) {
        const isPeak = array[i] > array[i+1] && array[i] > array[i - 1]
        if(!isPeak) {
            i++;
            continue;
        }
        let leftIdx = i - 2;
        while(leftIdx >= 0 && array[leftIdx+1] > array[leftIdx]) {
            leftIdx--;
        }
        let right = i + 2;
        while(rightIdx < array.length && array[right -1 ] > array[right]) {
            right++;
        }
        let currentLongestPeak = right - left - 1;
        longestPeakLength = Math.max(longestPeakLength, currentLongestPeak)
        i = right;
    }
    return longestPeakLength;
}