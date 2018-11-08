/*
Given an unsorted integer array, find the smallest missing positive integer.

Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 * 桶排序, 对应的位置的数字本来应该是固定的 [1,2,3....]
 * T O(n) S O(1)
 */
var firstMissingPositive = function(nums) {
    if (nums.length === 0) {
        return 1
    }
    for (let i = 0; i < nums.length; i++) {
        // 对应的数字要大于0, 并且小于数组长度
        while (
            nums[i] > 0 &&
            nums[i] <= nums.length &&
            nums[nums[i] - 1] !== nums[1]
        ) {
            // [1,2,3,4] --> 查看是否在正确的 index 位置上面
            // 如果 i 不是应该正确的值, 那么就找到正确的位置, 进行一次替换
            // 正确的位置 index = nums[i] - 1
            let index = nums[i] - 1
            if (nums[index] !== nums[i]) {
                let temp = nums[index]
                nums[index] = nums[i]
                nums[i] = temp
            }
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1
        }
    }
    return nums.length + 1
}
