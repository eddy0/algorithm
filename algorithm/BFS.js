// breadth first solution
// 利用 queue  的方式, 就是两个 array, 如果root 存在 left 或者 right,
// 就 push 到 queue 里面, 然后每次都 shift 第一个来处理, 这样就可以水平方向的优先

/*
[root, root.left, root.right, ]
[root]  -> [root.left, root.right]  --> [root.right, root.left.left...]
*/

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

var bfs = function(root) {
    let data = []
    let queue = []
    queue.push(root)
    while (queue.length > 0) {
        let node = queue.shift()
        data.push(node.val)
        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }
    return data
}

var bfsToTree = function(array) {
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
