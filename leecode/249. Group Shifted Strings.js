/*
Given a string, we can "shift" each of its letter to its successive letter, for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:

"abc" -> "bcd" -> ... -> "xyz"
Given a list of strings which contains only lowercase alphabets, group all strings that belong to the same shifting sequence.

Example:

Input: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"],
Output: 
[
  ["abc","bcd","xyz"],
  ["az","ba"],
  ["acef"],
  ["a","z"]
]
*/

/**
 * @param {string[]} strings
 * @return {string[][]}
 */

// 找规律, 相同的offset 的在一起, 然后相同的字符串长度在一起
// 同样用一个 参照好的 string 作为 key
// 每一个字符串需要找到相同的参照物, offset 要一样, 就以 a 为标准

var groupStrings = function(strings) {
  let hash = {}
  for (let str of strings) {
    let offset = str[0].charCodeAt() - 97
    let key = ''
    for (let n of str) {
      let char = (n.charCodeAt() - offset + 26) % 26
      key += char
    }
     // check if hash contains key
    if (hash[key] === undefined) {
      hash[key] = [str]
    } else {
      hash[key].push(str)
    }
  }
  return Object.values(hash)
};

groupStrings(["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"])