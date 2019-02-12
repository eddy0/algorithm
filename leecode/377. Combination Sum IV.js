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



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  let res = new Array(target + 1).fill(0)
  res[0] = 1
  for (let i = 1; i < res.length; i++) {
    for (let num of nums) {
      if (i - num >= 0) {
        res[i] += res[i - num]
      }
    }
  }
  return res
}

var helper = function(nums, target, map) {
  if (target < 0) {
    return 0
  }
  if (target === 0) {
    return 1
  }
  if (map.has(target)) {
    return map.get(target)
  }
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    res += helper(nums, target - nums[i], map)
  }
  map.set(target, res)
  return res
}

var combinationSum4_1 = function(nums, target) {
  if (nums.length === 0) {
    return 0
  }
  let map = new Map()
  return helper(nums, target, map)
}

combinationSum4_1([1, 2, 3], 4)
