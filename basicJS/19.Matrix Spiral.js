/*
Create a square matrix of a given size in which elements are in spiral order.

describe("Matrix Spiral", () => {
 it("Should implement matrix spiral", () => {
  assert.deepEqual(spiral(3), [[1, 2, 3], [8, 9, 4], [7, 6, 5]]);
 })
})
[1, 2, 3]
[8, 9, 4]
[7, 6, 5]

[1,  2,  3,  4]   row   1 => n
[12, 13, 14, 5]   row   n - 3 ,  n + 1
[11, 16, 15, 6]   row
[10,  9,  8, 7]   row   n + row - 1   n + row -1 +
 */

const log = console.log.bind(console)

const spiral = (n) => {
    let count = 1
    let startRow = 0
    let endRow = n - 1
    let startColumn = 0
    let endColumn = n - 1
    let matrix = []
    for (let i = 0; i < n; i++) {
        matrix.push([])
    }
    while (startColumn <= endColumn && startRow <= endRow) {
        for (let i = startColumn; i <= endColumn; i++) {
            matrix[startRow][i] = count
            count++
        }
        startRow++
        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endColumn] = count
            count++
        }
        endColumn--
        for (let i = endColumn; i >= startColumn; i--) {
            matrix[endRow][i] = count
            count++
        }
        endRow--
        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startColumn] = count
            count++
        }
        startColumn++
    }

    log(matrix)
    return matrix
}

spiral(4)
