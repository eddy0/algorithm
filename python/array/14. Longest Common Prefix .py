from typing import List

"""
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.

"""

"""
思路:
1. 找到 list 的最小长度
2. 从 0 到最小长度之间进行搜索, 最多只能和最小长度的元素相同
3. 遍历 list 的每个元素, 并且元素的每个字母必须要一样, 如果不一样就终止程序
"""

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ''
        res = ''
        mix_len = min([len(str) for str in strs])
        first = strs[0]
        for i in range(mix_len):
            char = first[i]
            for str in strs:
                if str[i] != char:
                    return res
            res += char
        return res