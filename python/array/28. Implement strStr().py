"""
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().


"""

"""
思路:
切片的套路
找到 needle 的长度, 
遍历字符串, i 从 0 到 str-needle 的长度
如果 str[i: len(needle)] = needle, 就返回 i

"""

class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        length = len(needle)
        for i in range(len(haystack) - length + 1):
            if haystack[i: i + length] == needle:
                return i
        return -1