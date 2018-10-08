/**
 * 两个 tree, 如果完全相同则不变, 或者对称就为 true
 *
 */

/*
    8      8        8      8
  4   5  4   5    4   5   5  4
                  7          7
  */

const isIdentical = function(tree1, tree2) {
  if (tree1 === null && tree2 === null) {
    return true
  } else if (tree1 === null || tree2 === null) {
    return false
  } else if (tree1.val !== tree2.val) {
    return false
  }
  return (
    (isIdentical(tree1.left, tree2.left) &&
      isIdentical(tree1.right, tree2.right)) ||
    (isIdentical(tree1.left, tree2.right) &&
      isIdentical(tree1.right, tree2.left))
  )
}
