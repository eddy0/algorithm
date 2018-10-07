/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

*/
/*
[0] => 1
[1] => 0
[0, 1, 3] => 2
*/

function getSum(n) {
    return ((0 + n) * (n + 1)) / 2
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // get the sum of the current array
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]
        sum += n
    }
    // get the sum what it is supposed to be
    let total = getSum(nums.length)
    return total - sum
}

let a = missingNumber([1])
console.log(a)
