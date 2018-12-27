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


var minWindow = function(str, t) {
  let array = Array(128).fill(0)
  // 把 t 的每个字母放到 array 里面计数
  for (let char of t) {
    n = char.charCodeAt() 
    array[n]++
  }
  // 需要包含的值的数组++
  let from = 0
  let total = t.length
  let min = Infinity
  let j = 0
  // for 循环, 如果值在数组中大于 0, 那么 total -= 1, 然后给每个值--, total 记录包含需要的数的个数
  // 如果全部都包含一次, total 就为 0 了 
  // 当 total为 0 的时候 进入判断, 先给 j 的array值 +1, 如果大于0了, 所以是 ABC中的一个,  total++, 移动 j, 
  // 并且跳出 while 去循环里面找下一个相同的字母

  for (let i = 0; i < str.length; i++) {
    let n = str[i]
    let index = n.charCodeAt()
    // 先判断值是不是大于0, 再给值--
    if (array[index] > 0) {
      total--
    }
    array[index]--
    
    while (total === 0) {
      // i - j + 1 表示 包含的字母的右边
      if (i - j + 1 < min) {
        min = i - j + 1
        from = j
      }
      let char = str[j]
      let code = char.charCodeAt()
      array[code]++
      if (array[code] > 0) {
        total++
      }
      j++
    }
  }
  return min === Infinity? '' : str.slice(from, from + min)
}

let S = 'ADOBECODEBANC'
let T = 'ABC'
let a = minWindow(S, T)
console.log(a)
