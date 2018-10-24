class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    // not balance
    insert(val) {
        let current = this.root
        let node = new Node(val)
        while (true) {
            if (current.val === val) {
                return undefined
            } else if (current.val > val) {
                if (current.left === null) {
                    current.left = node
                    return this
                }
                current = current.left
            } else {
                if (current.right === null) {
                    current.right = node
                    return this
                }
                current = current.right
            }
        }
        return this
    }

    find(val) {
        let current = this.root
        while (current !== null) {
            if (current.val === val) {
                return true
            }
            if (current.val > val) {
                current = current.left
            } else {
                current = current.right
            }
        }
        return false
    }
}

var tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)
