/*
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

Each number in candidates may only be used once in the combination.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
*/

var helper = function(res, array, candidates, target, start) {
  if (target < 0) {
    return
  }
  if (target === 0) {
    res.push([...array])
    return
  }
  for (let i = start; i < candidates.length; i++) {
    console.log('i', i, start, array, candidates[i])
    if (i !== start && candidates[i] === candidates[i - 1]) {
      continue
    }
    let n = candidates[i]
    let rest = target - n
    array.push(n)
    helper(res, array, candidates, rest, i + 1)
    array.pop()
  }
}

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let res = []
  if ( candidates === null || candidates.length <= 0) {
    return res
  }
  let array = []
  // 需要排序去重
  candidates = candidates.sort((a, b) => a - b)
  helper(res, array, candidates, target, 0)
  console.log(res)
  return res
}


var candidates = [10,1,2,7,6,1,5]
var target = 8
combinationSum2(candidates, target)