/*
216. Combination Sum III

Find all possible combinations of k numbers that add up to a number n, 
given that only numbers from 1 to 9 can be used and
 each combination should be a unique set of numbers.

Note:

All numbers will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: k = 3, n = 7
Output: [[1,2,4]]
Example 2:

Input: k = 3, n = 9
Output: [[1,2,6], [1,3,5], [2,3,4]]


*/

var helper = function(res, array, target, k, start) {
  if (target === 0 && k === 0) {
    res.push([...array])
    return
  }
  for (let i = start; i <= 9; i++) {
    array.push(i)
    helper(res, array, target - i, k - 1, i + 1)
    array.pop()
  }
}

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let res = []
  let array = []
  if (n <= 0) {
    return res
  }
  helper(res, array, n, k, 1)
  console.log(res)
  return res
}

var k = 3
var n = 9
combinationSum3(k, n)
