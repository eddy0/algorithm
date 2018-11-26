/*
Write a function that takes a string as input and returns the string reversed.

Example 1:

Input: "hello"
Output: "olleh"
Example 2:

Input: "A man, a plan, a canal: Panama"
Output: "amanaP :lanac a ,nalp a ,nam A"

*/
// sawp , 前后交换
// string 是值类型, immutable, 要先转为 array 操作!!
var reverseString = function(s) {
  let left = 0
  let right = s.length - 1
  s = s.split('')
  while(left < right) {
    let start = s[left]
    let end = s[right]
    let temp = start
    s[left] = end
    s[right] = temp 
    left++
    right--
  }
  return s.join('')
}

/**
 * @param {string} s
 * @return {string}
 */

var reverseString1 = function(s) {
  return s
    .split('')
    .reverse()
    .join('')
}
