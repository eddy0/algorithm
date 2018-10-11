/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i]
    if (nums.indexOf(n) === nums.lastIndexOf(n)) {
      return n
    }
  }
}

var singleNumber = function(nums) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    let n = obj[i]
    if (obj[n] === undefined) {
      obj[n] = 1
    } else {
      obj[n] += 1
    }
  }
  let unique = Object.keys(obj).filter((k) => obj[k] === 1)
  return Number(unique[0])
}
