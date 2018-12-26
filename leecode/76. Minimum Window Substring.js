/*

76. Minimum Window Substring

Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

*/

const log = console.log.bind(console)

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// 把 t 的每个字母放到 array 里面计数

var minWindow = function(str, t) {
  let array = Array(128).fill(0)
  for (let char of t) {
    n = char.charCodeAt()
    array[n]++
  }
  let from = 0
  let total = t.length
  let min = Number.MAX_VALUE
  let offset = 0
  for (let i = 0; i < str.length; i++) {
    let n = str[i]
    let index = n.charCodeAt()
    if (array[index] > 0) {
      array[index]--
      total--
    }
    while (total == 0) {
      if (i - offset + 1 < min) {
        min = i - offset + 1
        from = offset
      }
      offset++
      array[offset]++
      if (array[offset] > 0) {
        total++
      }
    }
    return min == Math.MAX_VALUE ? '' : str.slice(from, from + min)
  }

}

let S = 'ADOBECODEBANC'
let T = 'ABC'
let a = minWindow(S, T)
console.log(a)
