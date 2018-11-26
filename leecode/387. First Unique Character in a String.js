/*

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.


*/

const log = console.log.bind(console)

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let count = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
      let n = s[i].charCodeAt() - 97
      count[n]++
  }
  log(count)
  
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
