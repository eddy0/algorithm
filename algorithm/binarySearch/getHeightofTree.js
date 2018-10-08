// get the max height of the tree
// time O(n)  space O(n) === O(height)

const getHeight = function(root) {
  if (root === null) {
    return 0
  }
  let left = getHeight(root.left)
  let right = getHeight(root.right)
  return 1 + Math.max(left, right)
}
