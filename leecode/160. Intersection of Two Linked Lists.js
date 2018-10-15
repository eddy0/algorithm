/*
 Write a program to find the node at which the intersection of two singly linked lists begins.


For example, the following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3
begin to intersect at node c1.


Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (headA === null || headA.next === null) {
    return null
  }
  if (headB === null || headB.next === null) {
    return null
  }
  let a = headA
  let b = headB
  while (a !== null && b !== null) {
    if (a.val === b.val) {
      return true
    }
    a = a.next
    b = b.next
  }
  return false
}

// s1 = "sea", s2 = "eat"

var getUnique = (a, b) => {
  let n = a.split('')
  let m = b.split('')
  for (let i = 0; i < n.length; i++) {
    let s = n[i]
    let index = m.indexOf(s)
    if (index !== -1) {
      m.splice(index, 1)
      n.splice(i, 1)
      i--
    }
  }
  return [].concat(m, n)
}
