/*
Given an array of non-negative integers, you are initially 
positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

Example:

Input:  [2,   3,  1 ,1  ,4]
    i                3
 max                     4 
 cur     4
 res      2
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.
Note:

You can assume that you can always reach the last index.

// 遍历, 找最大的值

返回的是
*/

var jump = function(nums: number[]): number {
    if (nums == null || nums.length < 2) {
        return 0
    }
    let res: number = 0
    let curMax: number = 0
    let maxNext: number = 0
    for (let i: number = 0; i < nums.length; i++) {
        maxNext = Math.max(nums[i] + i, maxNext)
        if (i === curMax) {
            res++
            curMax = maxNext
        }
    }
    return res
}
