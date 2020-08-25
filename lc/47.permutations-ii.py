#
# @lc app=leetcode id=47 lang=python3
#
# [47] Permutations II
#

# @lc code=start
class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        res = []
        checked = [0 for i in range(len(nums))]
        
        def dfs(nums, temp, checked):
            if len(nums) == len(temp):
                res.append(temp)
            
            for i in range(len(nums)):
                if checked[i] == 1:
                    continue
                if i > 0 and nums[i-1] == nums[i] and checked[i-1] != 1:
                    continue
                checked[i] = 1
                dfs(nums, temp+[nums[i]], checked)
                checked[i] = 0

        dfs(nums, [], checked)
        return res
            
        
# @lc code=end

