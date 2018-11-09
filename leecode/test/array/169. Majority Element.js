/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2

*/

// 超过一半, 那么排序之后中间的那个数字一定是最多的
// t o(nlogn) s o(n)
var majorityElement1 = function(nums) {
    nums = nums.sort((a, b) => a - b)
    return nums[nums.length / 2]
}

// hash t o(n)  s o(n)
var majorityElement2 = function(nums) {
    let obj = {}
    nums.map((n) => {
        obj[n] = obj[n] === undefined ? 1 : (obj[n] += 1)
    })
    return Number(Object.keys(obj).filter((k) => obj[k] > nums.length / 2)[0])
}

// 设置一个值, 两个数相同就++, 不同就--, 为0 就替换, 结果一定是大于0, 并且是最多的那个
var majorityElement3 = function(nums) {
    let count = 0
    let res
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]
        if (count === 0) {
            res = n
        }
        if (res !== n) {
            count--
        } else {
            count++
        }
    }
    return res
}
