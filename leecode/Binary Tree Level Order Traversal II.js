/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]

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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (root) {
        return []
    }
    let arr = [root.val]
    if (root.left !== null) {
        arr.unshift([root.left.value])
    }
    if (root.right !== null) {
        arr[0].concat(root.right.val)
    }
    return [].concat(arr, levelOrderBottom(root.left), levelOrderBottom(root.right) )

};