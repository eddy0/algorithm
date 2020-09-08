#
# @lc app=leetcode id=77 lang=python3
#
# [77] Combinations
#

# @lc code=start
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        def dfs(current, index):
            if len(current) == k:
                res.append(current[:])
                return
            
            for i in range(index,n+1):
                current.append(i)
                dfs(current, i+1)
                current.pop()
        res = []
        dfs([], 1)
        return res

# @lc code=end

