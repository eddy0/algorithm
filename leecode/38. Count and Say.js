/*
The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

 

Example 1:

Input: 1
Output: "1"
Example 2:

Input: 4
Output: "1211"

1.     1
2.     11
3.     21
4.     1211
5.     111221

*/

var getNewString = function(str) {
  let count = 1
  let s = ''
  for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
          count++
      } else {
          s = s + String(count) + str[i]
          count = 1
      }  
  }
  return s
}


var countAndSay = function(n) {
 let s = '1'
 let i = 2
 while (i <= n) {
   s = getNewString(s) 
   i++
 }
  return s
};