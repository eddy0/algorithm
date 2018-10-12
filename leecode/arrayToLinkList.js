// give an array and conver to link list
// {val: xx, next: { val: next: {}}}
var Node = function(val) {
  this.val = val
  this.next = null
}

var append = function(head, i) {
  let n = head
  while (n.next !== null) {
    n = n.next
  }
  let node = new Node(i)
  n.next = node
  return head
}

var arrayToLinkList = function(arr) {
  let head
  if (arr.length === 0) {
    return null
  }
  head = new Node(arr[0])
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i]
    head = append(head, n)
  }
  return head
}
