/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// counting sort 的思想, 用 hash 来做
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false
  }
  const count = new Array(26).fill(0)
  // ++ 和 --  一定是等于 0
  for (let i = 0; i < s.length; i++) {
    let a = s[i].charCodeAt() - 97
    let b = t[i].charCodeAt() - 97
    count[a]++
    count[b]--
  }
  for (let n of count) {
    if (n !== 0) {
      return false
    }
  }
  return true
};



var isAnagram1 = function(s, t) {
  s = s.split('').sort().join('')
  t = t.split('').sort().join('')
  return s === t
};

