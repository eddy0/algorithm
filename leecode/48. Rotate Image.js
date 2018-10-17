/*
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
Example 2:

Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]

解法: 
先移动行, 再对折
注意 对折的时候 x y 的位置

[
  
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

[
  
  [15,14,12,16],
  [13, 3, 6, 7],
  [ 2, 4, 8,10],
  [ 5, 1, 9,11],
], 

[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
 
 */

var rotate = function(matrix) {
  let len = matrix.length
  // 翻转行
  for (let i = 0; i < len / 2; i++) {
    let j = len - 1 - i // 这里要加分号, 不然报错
    ;[matrix[i], matrix[j]] = [matrix[j], matrix[i]]
  }

  // 对折
  for (let x = 0; x < len; x++) {
    for (let y = x + 1; y < len; y++) {
      ;[matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]]
    }
  }
  return matrix
}
