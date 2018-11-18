/*
Given an array of integers, find out whether there are two distinct indices i and j in the array such that 
the absolute difference between nums[i] and nums[j] is at most t 
and the absolute difference between i and j is at most k.

Example 1:

Input: nums = [1,2,3,1], k = 3, t = 0
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1, t = 2
Output: true
Example 3:

Input: nums = [1,5,9,1,5,9], k = 2, t = 3
Output: false
找到两个相同的值, 距离最多到k, 值最多差0

遍历array, 判断 nums[i], nums[j] 是否在 t 之内, 并且 i, j 是否在 k 之内
不懂

*/
