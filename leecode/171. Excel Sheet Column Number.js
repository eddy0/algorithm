/*
Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
Example 1:

Input: "A"
Output: 1
Example 2:

Input: "AB"
Output: 28
Example 3:

Input: "ZY"
Output: 701
*/

/*

let letters = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ'
AB -- 26 + 2   1 * 26 + 2
AZ -- 26 + 26   1 * 26 + 26
BA -- 32 + 1    2 * 26 + 1  
indexOf letter * position
*/


/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var letters = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = 0
  let len = s.length
  let l = 1
  for (let i = s.length - 1; i >= 0; i-- ) {
     let n = s[i]
     let index = letters.indexOf(n)
      result += index * l
      l *= 26
  }  
  return result
};