/*
293. Flip Game
You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner.

Write a function to compute all possible states of the string after one valid move.

Example:

Input: s = "++++"
Output: 
[
  "--++",
  "+--+",
  "++--"
]
连续的加号可以变成减号, 
Note: If there is no valid move, return an empty list [].
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var generatePossibleNextMoves = function(s) {
    let res = []
    for (let i = 1; i < s.length; i++) {
      let char = s[i]
      if (char === '+' && s[i - 1] === '+') {
        let n = s.slice(0, i - 1) + '--' + s.slice(i + 1)
        res.push(n) 
      }
    }
    return res
};

