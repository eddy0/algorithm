/* 
preorder  先 root, 然后左右, 意思就是左边有就 push 左边, 然后到右边
             10
            6   15
          3  8    20

[10, 6, 3, 8, 15, 20]
*/

var preOrder = function(root) {
    let array = []
    var helper = function(root) {
        array.push(root.val)
        if (root.left) {
            helper(root.left)
        }
        if (root.right) {
            helper(root.right)
        }
    }
    helper(root)
    return array
}
