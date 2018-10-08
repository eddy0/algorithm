/*

 对称的 tree, 左边的左 = 右边的右, 左边的右 = 右边的左

      10
    5   5
 1   3  3  1
2 4 6 8 2 4 6 8
 */

// 把大问题改为小问题, 找规律
// time O(n)  每次都 对折
// space O(n) ---> O(height) 如果是 balanced 就是 logn

const isSymmetric = function(node1, node2) {
  // base case, 3 situation, 先分析 null 的情况, 在分析 value
  if (node1 === null && node2 === null) {
    return true
  } else if (node1 === null || node2 === null) {
    return false
  } else if (node1.val !== node2.val) {
    return false
  }
  // recursion rule
  return (
    isSymmetric(node1.left, node2.right) && isSymmetric(node1.right, node2.left)
  )
}
