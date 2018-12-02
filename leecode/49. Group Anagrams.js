/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/

// 先用 counting sort 的思想写出 2a2b 的形式
// 然后 把 '2a2b'作为 key, value 为原始的值
// 应该也可以用 sort 之后的值作为 key, 然后原来值当成 value

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// m * n

var groupAnagrams = function(strs) {
  let map = new Map()
  for (let str of strs) {
    let count = Array(26).fill(0)
    for (char of str) {
      let index = char.charCodeAt() - 97
      count[index]++
    }
    let s = ''
    for (let i = 0; i < count.length; i++) {
      if (count[i] !== 0) {
        // 变成 '2a2b' 的形式
        s += (count[i] + String.fromCharCode(i + 97))
      }
    }
    if (map.has(s)) {
      let list = map.get(s)
      list.push(str)
    } else {
      list = []
      list.push(str)
      map.set(s, list)
    }
  }
  return Array.from(map.values()) 
}

var groupAnagrams1 = (strs) => {
  let hash = {}
  for (let str of strs) {
    let key = str.split('').sort().join('')
    if (hash[key] === undefined) {
      hash[key] = [str]
    } else {
      hash[key].push(str)
    }
  }
  return Object.values(hash)
}



groupAnagrams1(["eat", "tea", "tan", "ate", "nat", "bat"])
