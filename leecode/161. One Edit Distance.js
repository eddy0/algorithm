/*
Given two strings s and t, determine if they are both one edit distance apart.

Note: 

There are 3 possiblities to satisify one edit distance apart:

Insert a character into s to get t
Delete a character from s to get t
Replace a character of s to get t
Example 1:

Input: s = "ab", t = "acb"
Output: true
Explanation: We can insert 'c' into s to get t.
Example 2:

Input: s = "cab", t = "ad"
Output: false
Explanation: We cannot get t from s by only one step.
Example 3:

Input: s = "1203", t = "1213"
Output: true
Explanation: We can replace '0' with '1' to get t.

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
  let len = Math.min(s.length, t.length)
  for (let i = 0; i < len; i++) {
    if (s[i] !== t[i]) {
      if (s.length === t.length) {
        // 只有一个相同, 如果长度相等的话, 也就是说除了这一个其他的都相同
        return s.slice(i + 1) === t.slice(i + 1)
      } else if (s.length > t.length) {
        // 如果长度不同, 则这个就是多的
        return s.slice(i + 1) === t.slice(i)
      } else {
        return s.slice(i) === t.slice(i + 1)
      }
    }
  }
  // 如果都相等, 判断末尾, 也就是长度差 1 就好了
  return Math.abs(s.length - t.length) === 1
};