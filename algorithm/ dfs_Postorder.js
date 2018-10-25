/*
postorder  如果底层有, 先 左再 右再 root(自己)
preorder   先 root (自己), 再左 再右
             10
            6   15
          3  8    20
            
    [3, 8, 6, 20, 15, 10]
*/

var preOrder = function(root) {
    let array = []
    let traversal = function(root) {
        if (root.left) {
            traversal(root.left)
        }
        if (root.right) {
            traversal(root.right)
        }
        array.push(root.val)
    }
    traversal(root)
    return array
}
