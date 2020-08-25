#
# @lc app=leetcode id=46 lang=python3
#
# [46] Permutations
#

# @lc code=start
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res = []
        checked = [0 for i in range(len(nums))]
        
        def dfs(nums, temp):
            if len(nums) == len(temp):
                res.append(temp)
                return 
            
            for i in range(len(nums)):
                if checked[i] != 1:
                    checked[i] = 1
                    dfs(nums, temp+[nums[i]])
                    checked[i] = 0
        
        dfs(nums, [])
        return res
        
# @lc code=end

