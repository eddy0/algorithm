const assert = require('assert')

const log = console.log.bind(console)

class Node {
    constructor(e=null) {
        this.element = e
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this._length = 0
        this.head = new Node()
    }

    isEmpty() {
        return this._length === 0
    }

    length() {
        return this._length
    }

    _nodeAtIndex(index) {
        let n = this.head
        let i = 0
        while (i < index) {
            n = n.next
            i++
        }
        return n
    }

    elementAtIndex(index) {
        const node = this._nodeAtIndex(index)
        return node.element
    }

    // 在链表末尾增加一个元素
    append(e) {
        let n = this.head
        while (n.next !== null) {
            n = n.next
        }
        const node = new Node(e)
        n.next = node
        this._length++
    }

    // 返回一个元素的 index
    indexOf(e) {
        let i = 0
        let n = this.head
        while (n !== null) {
            if (e === n.element) {
                return i
            }
            n = n.next
            i++
        }
        return -1
    }

    toString() {
        let n = this.head
        let s = ''
        while (n !== null) {
            s += (n.element + ' > ')
            n = n.next
        }
        return s
    }

    log() {
        let n = this.head.next
        log('遍历链表')
        while(n != null) {
            log(' > ', n.element)
            n = n.next
        }
    }

    firstElement() {
        const n = this.head
        const e = n.next.element
        return e
    }

    lastElement() {
        let n = this.head
        while (n.next !== null) {
            n = n.next
        }
        const e = n.element
        return e
    }

    insertBeforeIndex(index, element) {
        const node = this._nodeAtIndex(index)
        const previous = this._nodeAtIndex(index - 1)
        const n = new Node(element)
        previous.next = n
        n.next = node
    }

    insertAfterIndex(index, element) {
        const node = this._nodeAtIndex(index)
        const n = new Node(element)
        n.next = node.next
        node.next = n
    }

    deleteAtIndex(index) {
        const node = this._nodeAtIndex(index)
        const previous = this._nodeAtIndex(index - 1)
        previous.next = node.next
    }

    deleteByElement(element) {
        const index = this.indexOf(element)
        this.deleteAtIndex(index)
    }
}

const testAppend = () => {
    const n1 = new Node(111)
    const n2 = new Node(222)

    const l = new LinkedList()
    l.head = new Node('head')
    l.head.next = n1
    n1.next = n2

    l.append(333)

    log(l.toString())
}

const testFirstElement = () => {
    const n1 = new Node(111)
    const n2 = new Node(222)

    const l = new LinkedList()
    l.head = new Node('head')
    l.head.next = n1
    n1.next = n2

    const e = l.firstElement()
    console.log('test1')
    assert(e === 111)
}

const testLastElement = () => {
    const n1 = new Node(111)
    const n2 = new Node(222)

    const l = new LinkedList()
    l.head = new Node('head')
    l.head.next = n1
    n1.next = n2

    const e = l.lastElement()
    console.log('test2')
    assert(e === 222)
}

const testInsertBeforeIndex = () => {
    const n1 = new Node(111)
    const n2 = new Node(222)

    const l = new LinkedList()
    l.head = new Node('head')
    l.head.next = n1
    n1.next = n2

    l.insertBeforeIndex(2, 333)
    console.log('test3')
    assert(l.toString() === 'head > 111 > 333 > 222 > ')
}

const testInsertAfterIndex = () => {
    const n1 = new Node(111)
    const n2 = new Node(222)

    const l = new LinkedList()
    l.head = new Node('head')
    l.head.next = n1
    n1.next = n2

    l.insertAfterIndex(1, 333)
    console.log('test4')
    assert(l.toString() === 'head > 111 > 333 > 222 > ')
}


const testDelete = () => {
    const n1 = new Node(111)
    const n2 = new Node(222)

    const l = new LinkedList()
    l.head = new Node('head')
    l.head.next = n1
    n1.next = n2

    l.deleteAtIndex(1)
    console.log('test5')
    assert(l.toString() === 'head > 222 > ')
}

const testDeleteElement = () => {
    const n1 = new Node(111)
    const n2 = new Node(222)

    const l = new LinkedList()
    l.head = new Node('head')
    l.head.next = n1
    n1.next = n2

    l.deleteByElement(222)
    console.log('test6')
    assert(l.toString() === 'head > 111 > ')
}

const test = () => {
    testAppend()
    testFirstElement()
    testLastElement()
    testInsertBeforeIndex()
    testInsertAfterIndex()
    testDelete()
    testDeleteElement()
}

if (require.main === module) {
    test()
}
