/*
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
Example 2:

Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 */

var valid = function(n) {
  let obj = {}
  if (obj[n] !== '.') {
    return false
  }
  obj[n] = 1
}

var validLine = function(n, obj) {
  if (n !== '.') {
    if (obj[n] !== undefined) {
      return false
    }
    obj[n] = 1
  }
}

var isValidSudoku = function(board) {
  let row
  let column
  for (let x = 0; x < 9; x++) {
    let objRow = {}
    let objCol = {}
    for (let y = 0; y < 9; y++) {
      validLine(board[y][x], objRow)
      validLine(board[x][y], objCol)
    }
    console.log(objRow)
  }
  for (let i = 0; i < 9; i++) {
    let obj = {}
    let m1 = Math.floor(i / 3) * 3
    let m2 = (i % 3) * 3
  }
}
