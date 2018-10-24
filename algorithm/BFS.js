// breadth first solution
// 利用 queue  的方式
var bfs = function(array) {
    let array = []
    if (tree === null) {
        return []
    }
    array.push(tree.val)
    var helper = function(tree, array) {
        let left = tree.left
        let right = tree.right
        while (left && right) {
            array.push(left.val)
            array.push(right.val)
        }
    }
}

var convert = function(array) {
    if (array.length === 0) {
        return null
    }
    let root

    var helper = function(root, array, i) {
        if (i < array.length) {
            if (array[i] === null) {
                return root
            }
            let node = new Node(array[i])
            root = node
            root.left = helper(root.left, array, 2 * i + 1)
            root.right = helper(root.right, array, 2 * i + 2)
        }
        return root
    }
    root = helper(root, array, 0)
    return JSON.stringify(root)
}

var inorder = function(array) {
    let root
    var helper = function(root, array) {
        if (array.length <= 0) {
            return null
        }
        let mid = Math.floor(array.length / 2)
        root = new Node(array[mid])
        root.left = helper(root.left, array.slice(0, mid))
        root.right = helper(root.right, array.slice(mid + 1))
        return root
    }
    root = helper(root, array)
    return root
}
