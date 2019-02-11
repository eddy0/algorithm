/*
377. Combination Sum IV

Given an integer array with all positive numbers and no duplicates, 
find the number of possible combinations that add up to a positive integer target.

Example:

nums = [1, 2, 3]
target = 4

The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)

Note that different sequences are counted as different combinations.

Therefore the output is 7.
*/

var helper = function(res, array, nums, target) {
  if (target < 0) {
    return
  }
  if (target === 0) {
    res.push([...array])
    return
  }
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i]
    array.push(n)
    helper(res, array, nums, target - n)
    array.pop()
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  let res = []
  let array = []
  if (nums.length <= 0) {
    return res.length
  }
  helper(res, array, nums, target)
  return res.length
}

combinationSum4([1, 2, 3], 4)
