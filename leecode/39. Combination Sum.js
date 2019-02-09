/*
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]

*/

var helper = function(res, list, candidates, target, start) {
  if (target < 0 ){
    return 
  }
  if (target === 0 ){
    res.push([...list])
    return 
  }
  for (let i = start; i < candidates.length; i++) {
    let n = candidates[i]
    list.push(n)
    helper(res, list, candidates, target - n, i)
    list.pop()
  }
}

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let res = []
  let list = []
  helper(res, list, candidates, target, 0)
  console.log(res)
  return res
}


combinationSum([2,3,5], 8)
