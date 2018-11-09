/**
 Given an integer array of size n,
  find all elements that appear more than ⌊ n/3 ⌋ times.

Note: The algorithm should run in linear time and in O(1) space.

Example 1:

Input: [3,2,3]
Output: [3]
Example 2:

Input: [1,1,1,3,3,2,2,2]
Output: [1,2]

 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 超过三分之一的话, 一定只有一个或者两个值
var majorityElement = function(nums) {
    let res = []
    let n1 = 0
    let count1 = 0
    let n2 = 0
    let count2 = 0
    // if 的顺序不能变的, 必须要先判断是否相等
    for (let n of nums) {
        if (n1 === n) {
            count1++
        } else if (n2 === n) {
            count2++
        } else if (count1 === 0) {
            n1 = n
            count1 = 1
        } else if (count2 === 0) {
            n2 = n
            count2 = 1
        } else {
            count1--
            count2--
        }
    }
    // 得到两个数比较看是否超过三分之一了
    count1 = 0
    count2 = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === n1) {
            count1++
        } else if (nums[i] === n2) {
            count2++
        }
    }
    if (count1 > nums.length / 3) {
        res.push(n1)
    }
    if (count2 > nums.length / 3) {
        res.push(n2)
    }
    return res
}
