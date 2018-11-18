/*

Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
找到相同的数字, 如果最大距离为k

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function(nums: number[], k: number): boolean {
    let hash = new Map()
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]
        if (hash.has(n)) {
            let index = hash.get(n)
            if (i - index <= k) {
                return true
            }
        }
        hash.set(n, i)
    }
    return false
}
