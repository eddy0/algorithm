"""
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:

Input: "hello"
Output: "holle"
Example 2:

Input: "leetcode"
Output: "leotcede"
Note:
The vowels does not include the letter "y".

"""

"""
思路:
反转元音字母, 
先把 str 转为 list
利用 while 循环, 一个从前往后遍历, 一个从后往前遍历,
swap 指针, 如果不在数组内, 就 start++, end--, 如果双方都满足条件就 swap

"""

class Solution:
    def reverseVowels(self, s: str) -> str:
        arr = list(s)
        vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
        start = 0
        end = len(s) - 1
        while start < end:
            if not arr[start] in vowel:
                start += 1
            if not arr[end] in vowel:
                end -= 1
            if arr[start] in vowel and arr[end] in vowel:
                arr[start], arr[end] = arr[end], arr[start]
                start += 1
                end -= 1
        return ''.join(arr)