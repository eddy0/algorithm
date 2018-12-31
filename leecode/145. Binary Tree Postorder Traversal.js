/*
145. Binary Tree Postorder Traversal
Given a binary tree, return the postorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]
Follow up: Recursive solution is trivial, could you do it iteratively?

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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if (root == null) {
    return []
  }
  
  let helper = (root, res) => {
    if (root === null) {
      return 
    }
    helper(root.left, res)
    helper(root.right, res)
    res.push(root.val)
  }
  let res = []
  helper(root, res)
  return res 
};