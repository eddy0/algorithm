class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
      res = {}
      for index, x in enumerate(nums):
        y = target - x
        if y in res:
          return [res[y], index]
        else:
          res[x] = index