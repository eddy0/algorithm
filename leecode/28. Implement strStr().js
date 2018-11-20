/*
Implement strStr().

Return the index of the first occurrence of needle in haystack,
 or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().


*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle.length < 1) {
        return 0
    }
    for (let i = 0; i < haystack.length; i++) {
        if (i + needle.length > haystack.length) {
            break
        }
        for (let j = 0; j < needle.length; j++) {
            // needle 的每一个字符都需要 haystack 的 i+ j 的位置上的值相等
            if (haystack[i + j] !== needle[j]) {
                break
            }
            // 已经遍历到最后的
            if (j === needle.length - 1) {
                return i
            }
        }
    }
    return -1

};