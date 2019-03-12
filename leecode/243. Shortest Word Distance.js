/*
243. Shortest Word Distance

Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

Example:
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Input: word1 = “coding”, word2 = “practice”
Output: 3
Input: word1 = "makes", word2 = "coding"
Output: 1
Note:
You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.
 // add this distance

*/

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
  let res = words.length
  for (let i = 0; i < words.length; i++) {
    let n = words[i]
    if (word1 === n) {
      for (let j = 0; j < words.length; j++) {
        let m = words[j]
        if (word2 === m) {
          res = Math.min(res, Math.abs(i - j))
        }
      } 
      res = Math.min(res, Math.abs())
    }
  }
  return res
};

