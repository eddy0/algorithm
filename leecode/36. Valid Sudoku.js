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

var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    let obj = {}
    for (let j = 0; j < 9; j++) {
      let row = board[i][j]
      if (row !== '.') {
        if (obj[row] !== undefined) {
          return false
        }
        obj[row] = true
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    let obj = {}
    for (let j = 0; j < 9; j++) {
      let col = board[j][i]
      if (col !== '.') {
        if (obj[col] !== undefined) {
          return false
        }
        obj[col] = true
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    let obj = {}
    let row = Math.floor(i / 3) * 3
    let col = (i % 3) * 3
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        let n = board[row + x][col + y]
        if (n !== '.') {
          if (obj[n] !== undefined) {
            return false
          }
          obj[n] = 1
        }
      }
    }
  }
  return true
}
