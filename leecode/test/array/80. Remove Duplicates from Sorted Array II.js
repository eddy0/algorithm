/*
Given a sorted array nums, 
remove the duplicates in-place such that duplicates appeared 
at most twice and return the new length.

Do not allocate extra space for another array, 
you must do this by modifying the input array 
in-place with O(1) extra memory.
*/

/*
Given nums = [1,1,1,2,2,3],

Your function should return length = 5, with the first five 
elements of nums being 1, 1, 2, 2 and 3 respectively.

It doesn't matter what you leave beyond the returned length.
*/

/*
Given nums = [1,1,1,2,2,3],

Your function should return length = 5, with the first five elements 
of nums being 1, 1, 2, 2 and 3 respectively.

It doesn't matter what you leave beyond the returned length.

*/

/**
 * @param {number[]} nums
 * @return {number}
 * sorted array, 最多重复两次,
 * 从三个数开始数, 第三个数和第一个数比较
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 2) {
        return nums.length
    }
    let count = 2
    for (let i = 2; i < nums.length; i++) {
        let n = nums[i]
        // 注意是 -2, 因为是和第一个数字进行比较
        if (nums[count - 2] !== n) {
            nums[res] = n
            res++
        }
    }
    return res
}
