/*
inorder  先左 再 root, 再中间
             10
            6   15
          3  8    20
            
    [3, 6, 8, 10, 15, 10]
*/

var inOrder = function(root) {
    let array = []
    let traversal = function(root) {
        if (root.left) {
            traversal(root.left)
        }
        array.push(root.val)
        if (root.right) {
            traversal(root.right)
        }
    }
    traversal(root)
    return array
}
