/*

Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Given nums = [1,1,2], return 2

*/

const removeDuplicates = function(nums) {
    nums.forEach((num, i) => {
        while (num === nums[i + 1]) {
            nums.splice(i + 1, 1)
        }
    })
    return nums.length
}



