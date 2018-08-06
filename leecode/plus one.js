/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.
Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

Input: [9]
Output: [1, 0]


 */


/**
 * @param {number[]} digits
 * @return {number[]}
 */

/*
如果 !== 9 则 +1 返回
如果 为 9, 则为 0, 然后 loop 到下一个
第一个为 9 的话就 splice 1

 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        let last = digits[i]
        if (last < 9) {
            digits[i] += 1
            return digits
        }
        digits[i] = 0
    }
    digits.splice(0, 0, 1)
    return digits
}