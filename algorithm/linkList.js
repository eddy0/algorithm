class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkList {
    constructor() {
        this.head = null
        this.tail = null
        this._length = 0
    }

    push(val) {
        let node = new Node(val)
        if (this.head === null) {
            this.head = node
            this.tail = this.head
        } else {
            this.tail.next = node
            this.tail = node
        }
        this._length++
        return this
    }

    pop() {
        if (this.head === null) {
            return
        }
        let fast = this.head
        let slow = fast
        while (fast.next !== null) {
            slow = fast
            fast = fast.next
        }
        this.tail = slow
        this.tail.next = null
        this._length--
        if (this._length === 0) {
            this.head = null
            this.tail = null
            this._length = 0
        }
        return fast
    }
    shift() {
        if (this.head === null) {
            return
        }
        let node = this.head
        this.head = this.head.next
        this._length--
        node.next = null
        if (this._length === 0) {
            this.tail = null
        }
        return node
    }
}

var l = new LinkList()
