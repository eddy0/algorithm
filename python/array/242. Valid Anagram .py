"""
242. Valid Anagram
easy
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
"""

"""
思路:
第一个用 obj 来记录次数, 次数++, 检查是否都在 obj 里面, 如果在就次数--, 次数小于 0 的话就说明错了
"""

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        obj = {}
        for char in s:
            if char in obj:
                obj[char] += 1
            else:
                obj[char] = 1
        for char in t:
            if not (char in obj):
                return False
            else:
                obj[char] -= 1
                if obj[char] < 0:
                    return False
        return True
