"""
38. Count and Say
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
"""


class Solution:
    def count(self, nums):
        s = ''
        count = 1
        pivot = nums[0]
        # print(len(str))
            if len(nums) >2:
            for i in range(1, len(nums)):
                if s[i] == s[i - 1]:
                    count += 1
                else:
                    s = s + str(i - 1) + nums[i - 1]
                    count = 1
        return s

    def countAndSay(self, n: int) -> str:
        nums = '1'
        i = 2
        while i <= n:
            nums = self.count(str)
            i += 1
        return nums

s = Solution()
s.countAndSay(5)