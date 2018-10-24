class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
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
            node.prev = this.tail
            this.tail = node
        }
        this._length++
        return this
    }

    pop() {
        if (this.head === null) {
            return
        }
        if (this.head.next === null) {
            this.head = null
            this.tail = null
            this._length = 0
            return this.head
        }
        let target = this.head
        let slow = target
        while (target.next !== null) {
            slow = target
            target = target.next
        }
        slow.next = null
        this.tail = slow
        this._length--
        target.prev = null
        return target
    }

    shift() {
        if (this.head === null) {
            return
        }
        let node = this.head
        this.head = this.head.next
        this._length--
        node.next = null
        this.head.prev = null
        if (this._length === 0) {
            this.tail = null
        }
        return node
    }

    unshift(val) {
        let node = new Node(val)
        if (this.head === null) {
            this.head = node
            this.tail = this.head
        } else {
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        this._length++
        return this
    }

    get(index) {
        if (index < 0 || index > this._length) {
            return null
        }
        let count = 0
        let current = this.head
        while (count < index) {
            count++
            current = current.next
        }
        return current
    }

    set(index, val) {
        let node = this.get(index)
        if (node === null) {
            return false
        }
        node.val = val
        return true
    }

    insert(index, val) {
        if (index < 0 || index > this._length) {
            return false
        } else if (index === this._length) {
            return this.push(val)
        } else if (index === 0) {
            return this.unshift(val)
        }
        let node = new Node(val)
        let prev = this.get(index - 1)
        let temp = prev.next
        prev.next = node
        node.prev = prev
        node.next = temp
        this._length++
        return true
    }

    remove(index) {
        if (index < 0 || index > this._length) {
            return false
        } else if (index === this._length) {
            return this.pop(val)
        } else if (index === 0) {
            return this.shift(val)
        }
        let prev = this.get(index - 1)
        let target = prev.next
        target.next.prev = prev
        prev.next = target.next
        this._length--
        target.prev = null
        target.next = null
        return target
    }

    reverse() {
        if (this.head === null || this.head.next === null) {
            return this.head
        }
        let fast = this.head
        let slow = null
        while (fast !== null) {
            let prev = fast
            fast = fast.next
            prev.next = slow
            slow = prev
        }
        this.head = slow
        return this
    }

    log() {
        let result = ''
        let node = this.head
        while (node !== null) {
            result += `${node.val} --> `
            node = node.next
        }
        result += 'null'
        return result
    }

    convert(array) {
        if (array.length < 1) {
            return this
        }
        this.head = new Node(array[0])
        let current = this.head
        for (let i = 1; i < array.length; i++) {
            let n = array[i]
            let node = new Node(n)
            current.next = node
            if (i === array.length - 1) {
                this.tail = node
            }
            current = current.next
        }
        this._length = array.length
        return this
    }
}

var l = new LinkList()
l.push(1)
l.push(2)
l.push(3)
