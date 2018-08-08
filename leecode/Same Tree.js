/*
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
Example 2:

Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
Example 3:

Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
 */



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }


/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
/*
判断直接用 return p.val = q.val, 然后递归往下走
如果其中一个为 null, 一个不是 null 的话, 就返回 false

 */
var isSameTree = function(p, q) {
    if (p === q) {
        return true
    }
    if (p === null || q === null) {
        return false
    }
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

/*
垃圾解法

var isSameTree = function(p, q) {
    return JSON.stringify(p) == JSON.stringify(q);
};
 */