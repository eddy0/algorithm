/*
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/
var helper = function(res, array, nums, index) {
  res.push(array)
  for (let i = index; i < nums.length; i++) {
    let n = nums[i]
    array.push(n)
    helper(res, array, nums, index + 1)
    array.splice(nums.length - 1, 1)
  }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let res = []
  if (nums === null || nums.length <= 0) {
    return res
  }
  let array = []
  helper(res, array, nums, 0)
  return res
}


let b = subsets([1,2,3])
console.log(b)
