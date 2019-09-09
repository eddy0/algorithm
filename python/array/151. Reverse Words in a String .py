"""
151. Reverse Words in a String
Given an input string, reverse the string word by word.



Example 1:

Input: "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: "  hello world!  "
Output: "world! hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

"""

"""
思路: 
变成数组分开, 然后再前后 swap
"""
class Solution:
    def reverseWords(self, s: str) -> str:
        strs = s.split()
        start = 0
        end = len(strs) - 1
        while start <= end:
            strs[start], strs[end] = strs[end], strs[start]
            start += 1
            end -= 1
        return ' '.join(strs)