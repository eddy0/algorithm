"""
290. Word Pattern
Easy
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true
Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.
"""

"""
思路:
同一个 pattern,用两个obj, key 为相互的 value, 如果对应的 key-value 不一样,就返回 false 
"""


class Solution:
    def wordPattern(self, pattern: str, str: str) -> bool:
        array = str.split()
        if len(pattern) != len(array):
            return False
        obj1 = {}
        obj2 = {}

        for i in range(len(pattern)):
            char = pattern[i]
            n = array[i]
            if not (char in obj1) and not (n in obj2):
                obj1[char] = n
                obj2[n] = char
            else:
                if not char in obj1:
                    obj1[char] = n
                if not n in obj2:
                    obj2[n] = char
                if obj1[char] != n or obj2[n] != char:
                    return False
        return True

