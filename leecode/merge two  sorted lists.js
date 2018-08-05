/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4

 */


const ListNode = (val) => {
    this.val = val
    this.next = null
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var mergeTwoLists = function(l1, l2) {
    let l = new ListNode(null)
    let head = l
    while( l1 && l2) {
        if (l1.val <= l2.val) {
            l.next = l1
            l1 = l1.next
        } else {
            l.next = l2
            l2 = l2.next
        }

        l = l.next
    }

    l.next = l1 || l2

    return head.next

}