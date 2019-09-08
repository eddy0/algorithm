from typing import List
import math

"""
344. Reverse String

Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.



Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
"""

"""
指针 swap 套路法:
一个从前面, 一个从后面
用 while 循环, start++, end--, 程序只需要运行 n/2 次
"""


class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        import math
        length = math.floor(len(s) / 2)
        l = len(s)
        for i in range(length):
            n = s[l - 1 - i]
            temp = s[i]
            s[i] = n
            s[l - 1 - i] = temp


class Solution2:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        start = 0
        end = len(s) - 1
        while start <= end:
            s[start], s[end] = s[end], s[start]
            start += 1
            end -= 1