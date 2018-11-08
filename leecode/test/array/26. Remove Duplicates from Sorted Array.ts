/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.


*/

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements
// of nums being 1 and 2 respectively.

// It doesn't matter what you leave beyond the returned length.

// Given nums = [0,0,1,1,1,2,2,3,3,4],
// Your function should return length = 5, with the first five elements
// of nums being modified to 0, 1, 2, 3, and 4 respectively.
// It doesn't matter what values are set beyond the returned length.

// 记住要 + 1
/**
 * 去掉重复, 并且返回数组长度,
 * space O(1), T O(n)
 */

const removeDuplicates = function(nums: number[]) {
    if (nums.length < 2) {
        return nums.length
    }
    let res: number = 0
    for (let i = 0; i < nums.length; i++) {
        let n = nums[res]
        if (n !== nums[i]) {
            res++
            nums[res] = res[i]
        }
    }
    return res + 1
}