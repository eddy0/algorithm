/*
Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const log = console.log.bind(console)


function ListNode(val) {
    this.val = val
    this.next = null
}


/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
这里不懂为什么 node 和 head 会联系起来, 还有如果是无序的话会怎么处理
之前的想法是放到一个 array 里面, 但是得不到结果
[1,1,1] => [1]

下面这种做法是无序的也可以,
如果不存在相同的, 就让 node == 下一个, 让 head.next 等于 next 这个对象, 并且重新让 node 指向 next, 继续往下走
如果存在相同的, 就直接让 next = next.next, 而 node (head) 不做处理, 相当于断掉他, 因为后面遇到不相同的会让 node = next, 也就是 next.next
 最后让 node.next = null 是因为 next == null 的话就跳过了这个, 需要手动切断联系

 */

var deleteDuplicates = function(head) {
    if (head === null) {
        return head
    }
    let arr = [head.val]
    let node = head
    let next = head.next
    while (next !== null) {
        if (!arr.includes(next.val)) {
            arr.push(next.val)
            node.next = next
            node = next
        }
        next = next.next
    }
    node.next = null
    log(JSON.stringify(head))
    return head
}

let node1 = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            next: null
        }
    }
}

let node2 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val:4,
                    next: null
                }
            }
        }
    }
}

deleteDuplicates(node2)
