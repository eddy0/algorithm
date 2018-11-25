/*

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.


*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  
}

firstUniqChar("dddccdbba")

var firstUniqChar1 = function(s) {
  for (let i = 0; j < s.length; i++) {
    let n = s[i]
    if (s.indexOf(n) === s.lastIndexOf(n)) {
      return i
    }
  }
  return -1
}
