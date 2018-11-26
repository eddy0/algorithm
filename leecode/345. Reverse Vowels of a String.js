/*
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:

Input: "hello"
Output: "holle"
Example 2:

Input: "leetcode"
Output: "leotcede"
Note:
The vowels does not include the letter "y".

*/

/**
 * @param {string} s
 * @return {string}
 
 */

// while 里面使用 while 来跳过
var reverseVowels = function(s) {
  let left = 0
  let right = s.length - 1
  s = s.split('')
  while (left < right) {
    while(left < right && !'aeiouAEIOU'.includes(s[left])) {
      left++
    }
    while(left < right && !'aeiouAEIOU'.includes(s[right])) {
      right--
    };
    [s[left], s[right]] = [s[right], s[left]]
    
    left++
    right--
  }
  return s.join('')    
};