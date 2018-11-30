/*
294. Flip Game II

You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner.

Write a function to determine if the starting player can guarantee a win.

Example:

Input: s = "++++"
Output: true 
Explanation: The starting player can guarantee a win by flipping the middle "++" to become "+--+".
Follow up:
Derive your algorithm's runtime complexity.

移动++成--, 
但是是有两个人玩,  确定开始的人一定是赢家
*/

// 用一个 hashmap 来记录中间所有的返回结果

/**
 * @param {string} s
 * @return {boolean}
 */
var canWin = function(s) {
  if (s === null || s.length === 0) {
    return false
  }
  let map = new Map()
  return helper(s, map)
};

var helper = function(s, map) {
  if (map.hasKey(s)) {
    return map.get(s)
  }
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === '+' && s[i + 1] === '+') {
      let opponent = s.slice(0, i) + '--' + s.slice(i + 2)
      if (!helper(opponent, map)) {
        map.put(s, true)
      }
    }
  }
 map.put(s, false)
 return false 
}