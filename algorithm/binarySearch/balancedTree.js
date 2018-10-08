// check if the tree is balanced
// the height of every node is 1 or less

const isBalanced = function(root) {
  // base case
  if (root === null) {
    return true
  }
  // get every single node's left and right height
  let left = getHeight(root.left)
  let right = getHeight(root.right)
  if (Math.abs(left - right) > 1) {
    return false
  }
  return isBalanced(root.left) && isBalanced(root.right)
}
