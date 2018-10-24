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
}

function preOrder(array) {
    if (array.length === 0) {
        return null
    }
    array = array.sort((a, b) => a - b)
    let mid = Math.floor(array.length / 2)
    let root = new Node(array[mid])
    for (let i = 0; i < array.length; i++) {
        let left = new Node(array[i])
        let right = new Node(array[i + 1])
        root.left = left
        root.right = right
    }
}
