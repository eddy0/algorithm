/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

/**
 *
 * @param {array} nums
 * @param {number} target
 * @returns {array}
 */
// 1.
var twoSum = function(nums, target) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let a = nums[i]
        for (let j = nums.length - 1; j > i; j--) {
            let b = nums[j]
            if (a + b === target) {
                result.push(i, j)
            }
        }
    }
    return result
}

const testTwoSum = () => {
    let nums = [2, 7, 11, 15]
    let target = 9
    // [0,1]
    twoSum(nums, target)
}

// 2.

var twoSum2 = function(nums, target) {
    let result = {}
    for (let i = 0; i < nums.length - 1; i++) {
        const n = nums[i]
        let rest = target - n
        if (result[rest] !== undefined) {
            return [result[rest], i]
        }
        result[n] = i
    }
    return []
}

console.log(twoSum2([2, 7, 11, 15], 9))
