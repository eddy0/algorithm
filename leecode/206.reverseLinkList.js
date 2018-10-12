/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// head.next.next = head
// head.next.val = head.val
// null <-  1 ->   2 ->  3 -> 4 -> 5 -> NULL
// prev    cur    next
//                          prev   cur  next

// null ->  1 ->   2 ->  3 < -  4 <-    5 -> NULL
//                      head        newHead

var reverseList = function(head) {
  if (head === null || head.next === null) {
    return head
  }
  let prev = null
  let current = head
  let next = head.next
  while (next !== null) {
    current.next = prev
    prev = current
    current = next
    next = next.next
  }
  current.next = prev
  return current
}
