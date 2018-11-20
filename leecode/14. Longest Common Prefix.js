/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.

*/

var longestCommonPrefix = (strs) => {
  if (strs.length === 0) {
    return ''
  }
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i]
    for (let j = 1; j < strs.length; j++) {
      // 其他组数的字符串全部符合就是 i = length了, 或者遍历 到 i 的位置不匹配了
      if (i === strs[j].length || strs[j][i] !== char) {
        return str[0].subString(0, i)
      }
    }
    return strs[0]
  }
}