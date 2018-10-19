/*
 write a function called summ zero
 accept sorted array of intergers, should find the first pair where
 the sum is 0, return the value or undefined if not find
 */

// [-3, -2, -1, 0, 1, 2, 3]  ->  [-3. 3]
// [-2, 0, 1, 3]  -> undefined
// [1, 2, 3]   -> undefined

// 一般指针都是前后指针比较方便
var sumZero = function(arr) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right = right - 1
        } else {
            left = left + 1
        }
    }
}
