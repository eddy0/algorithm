/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true
Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.


*/


/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let array = str.split(' ')
  if (pattern.length !== array.length) {
    return false
  }
  let obj1 = {}
  let obj2 = {}
  console.log(array)
  for (let i = 0; i < pattern.length; i++) {
    let n = pattern[i]
    let char = array[i]
    if (obj1[n] === undefined && obj2[char] === undefined) {
      obj1[n] = char
      obj2[char] = n
    } else {
      if (obj1[n] !== char || obj2[char] !== n) {
        return false
      }
    }
  }
  return true 
};

var pattern = "abba"
var str = "dog cat cat dog"
wordPattern(pattern, str)