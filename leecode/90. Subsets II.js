/*
90. Subsets II
Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
 */

var helper = function(res, list, nums, index) {
  res.push(list.slice())
  for (let i = index; i < nums.length; i++) {
    let n = nums[i]
    if (i !== index && nums[i] === nums[i - 1]){
      continue
    }
    list.push(n)
    helper(res, list, nums, i + 1)
    list.pop()
  }

}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let res = []
  if (nums === null && nums.length === 0) {
    return res
  }
  nums = nums.sort((a, b) => a - b)
  helper(res, [], nums, 0)
  return res
}
