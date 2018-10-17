/*
convert array to 

*/

var Node = function(val) {
  this.val = val
  this.left = null
  this.right = null
}

var convert = function(arr) {
  const insertNode = function(root, arr, i) {
    if (i < arr.length) {
      let temp = new Node(arr[i])
      root = temp
      root.left = insertNode(root.left, arr, 2 * i + 1)
      root.right = insertNode(root.right, arr, 2 * i + 2)
    }
    return root
  }

  let root
  root = insertNode(root, arr, 0)
  let r = JSON.stringify(root)
  console.log(r)
}
