/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let arr = []
    function helper(root, level) {
        if (root == null) {
            return
        }
        arr[level] = arr[level] || []
        arr[level].push(root.val)
        helper(root.left, level + 1, arr)
        helper(root.right, level + 1, arr)
    }
    helper(root, 0)
    return arr
}
