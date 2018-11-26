/*
Given an input string , reverse the string word by word. 

Example:

Input:  ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]
Note: 

A word is defined as a sequence of non-space characters.
The input string does not contain leading or trailing spaces.
The words are always separated by a single space.
Follow up: Could you do it in-place without allocating extra space?

*/

/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify str in-place instead.
 */

var reverse = function(str, i, j) {
  while (i < j) {
    let temp = str[i]
    str[i] = str[j]
    str[j] = temp
    i++
    j--
  }
}

var reverseWords = function(str) {
  reverse(str, 0, str.length - 1)
  let index = 0
  while (index < str.length) {
    let start = index
    while (index < str.length && str[index] !== ' ') {
      index++
    }
    reverse(str, start, index - 1)
    index++
  }
};