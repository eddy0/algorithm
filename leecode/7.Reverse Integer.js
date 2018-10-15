/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store 
integers within the 32-bit signed integer range: [−231,  231 − 1]. 
For the purpose of this problem, assume that your function returns 0 
when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x < Math.pow(-2, 31) || x > Math.pow(2, 31) - 1) {
    return 0
  }
  // 检查正负号
  let op = ''
  let arr = String(x).split('')
  if (x < 0) {
    op = '-'
    arr = arr.slice(1)
  }
  // 改为字符串再加上正负号
  let s = op + arr.reverse().join('')
  s = Number(s)
  if (s < Math.pow(-2, 31) || s > Math.pow(2, 31) - 1) {
    return 0
  }
  return s
}
