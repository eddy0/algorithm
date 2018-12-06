/*
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...
Example 1:

Input: 1
Output: "A"
Example 2:

Input: 28
Output: "AB"
Example 3:

Input: 701
Output: "ZY"

 */

 701 % 26

 /**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let str = ''
  while(n > 0) {
    // 因为 A 为 1, 所以要--
    n--
    let index = n % 26
    str = letters[index] + str
    n  = Math.floor(n / 26)
  }
  return str
  
};