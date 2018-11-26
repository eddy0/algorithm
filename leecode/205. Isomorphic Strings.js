/*
Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
Note:
You may assume both s and t have the same length.
*/
// 以前出现的字母都要相同
// 两个 obj, 分别存对方的值 

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let obj1 = {}
  let obj2 = {}
  for (let i = 0; i < s.length; i++) {
    let a = s[i]
    let b = t[i]
    // 都不存在就复制
    if (obj1[a] === undefined && obj2[b] === undefined) {
      obj1[a] = b
      obj2[b] = a
    // 其中一个不等于之前的值
    } else if (obj1[a] !== b || obj2[b] !== a) {
      return false
    }
  }
  return true
};