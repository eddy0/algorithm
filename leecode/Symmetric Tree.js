/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

        1
       / \
      2   2
     / \ / \
    3  4 4  3
   / \ / \ / \ / \
  5  6 7 8 8 7 6 5
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

const sameTree = function(left, right) {
    if (left === null && right === null) {
        return true
    }
    if (left === null || right === null  ) {
        return false
    }
    return  left.val === right.val && sameTree(left.left, right.right) && sameTree(left.right, right.left)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) {
        return true
    }
    return sameTree(root.left, root.right)

    // root.left.left === root.right.right
    // root.left.right === root.right.left

}