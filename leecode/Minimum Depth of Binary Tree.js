/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.
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

/**
 * @param {TreeNode} root
 * @return {number}
 */
    // 左边没有 就找右边看看 并且 + 1, 因为这一层是有的
var minDepth = function(root) {
    if (root === null) {
        return 0
    }
    if (root.left === null) {
        return 1 + minDepth(root.right)
    }
    if (root.right === null) {
        return 1 + minDepth(root.left)
    }

    return Math.min( 1 + minDepth(root.left), 1 +  minDepth(root.right) )
}