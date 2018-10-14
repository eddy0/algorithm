/**
 * 234. Palindrome Linked List
Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
 */

// 这个方法比较巧妙, 把 value 一个从前往后相加, 一个从后往前相加, 如果一样就相等
var isPalindrome1 = function(head) {
  let front = ''
  let back = ''
  while (head !== null) {
    front = front + head.val
    back = head.val + back
    head = head.next
  }
  return front === back
}

/*
              1       2        3       4      5     null

prev(null)   cur    next
                                     prev   cur    next
*/
var reverseLinkList = (head) => {
  let prev = null
  let current = head
  while (current !== null) {
    let next = current.next
    current.next = prev
    prev = current
    current = next
  }
  return prev
}

var compare = (head, node) => {
  while (node !== null) {
    if (node.val !== head.val) {
      return false
    }
    node = node.next
    head = head.next
  }
  return true
}

// 正常解法 利用快慢指针找到 linklis 的后半段, 然后反转后半段, 然后与原来的 linklist 比较 val
/*
1     2     3     4    3     2     1   null
                                fast
                slow

1     2     3      3     2     1   null
                                   fast
                  slow
*/
var isPalindrome = function(head) {
  // edge case
  if (head === null || head.next === null) {
    return true
  }
  let fast = head
  let slow = head
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  if (fast) {
    slow = slow.next
  }
  // 看 head 需不需要 slow.next, 我觉得不需要, 这样方便一点
  // slow 就是后半段的 linklist 了, 反转
  let reverse = reverseLinkList(slow)
  return compare(head, reverse)
}
