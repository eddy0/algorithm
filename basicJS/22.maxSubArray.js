/*
给定 array 和 number
write a function call maxSubarraySum
find the max sum of the a subarray 

maxSubArraySum([100, 300, 400,], 2)  -> 700
找到给定长度相邻和最大的 array

*/

function maxSubarraySum(array, length) {
    if (array.length < length) {
        return null
    }
    let max = 0
    for (let i = 0; i < length; i++) {
        max += array[i]
    }
    let current = max
    for (let i = length; i <= array.length - length + 1; i++) {
        current = current + array[i] - array[i - length]
        if (current > max) {
            max = current
        }
    }
    return max
}
