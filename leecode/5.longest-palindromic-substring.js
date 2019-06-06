/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */
/**
 * @param {string} s
 * @return {string}
 */
/*
 中心扩散法
dp 的方法

*/

var longestPalindrome = function(s) {
  if (s.length === 0) {
    return s
  }
  let res = ''
  let dp = true
  let max = 0
  for (let i = 0; i < s.length; i++) {
    let n = s[i]
    for (let j = 0; j <= i; j++) {
      
    }
  }
};

