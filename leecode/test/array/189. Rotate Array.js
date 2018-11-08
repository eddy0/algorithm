/*
Given an array, rotate the array to the right by k steps, 
where k is non-negative.

*/

/*
Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

/*
Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 */

var _rotate = function(nums, k) {
    for (let i = 0; i < k; i++) {
        let n = nums.pop()
        nums.unshift(n)
    }
}

// 取模很精髓啊, 从要旋转的 index 开始
// o(n) t(n)

var rotate2 = function(nums, k) {
    let temp = []
    for (let i = 0; i < nums.length; i++) {
        temp[(i + k) % nums.length] = nums[i]
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = temp[i]
    }
}

// 数组反转
var reverse = function(nums, start, end) {
    while (start < end) {
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
    }
    return nums
}

// 三次反转
// 1 2 3 4 5 6 7
// 7 6 5 4 3 2 1
// 5 6 7 4 3 2 1
// 5 6 7 1 2 3 4
// 没有使用额外的空间
// t O(n) S O(1)
var rotate = function(nums, k) {
    // k 取模因为 k 可能大于 nums.length
    k = k % nums.length
    nums = reverse(nums, 0, nums.length - 1)
    nums = reverse(nums, 0, k - 1)
    nums = reverse(nums, k, nums.length - 1)
    return nums
}
