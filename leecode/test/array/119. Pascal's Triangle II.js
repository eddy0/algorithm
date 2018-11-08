/*
Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.
Input: 3
Output: [1,3,3,1]
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = [1]
    for (let i = 0; i < rowIndex; i++) {
        row.unshift(1)
        for (let j = 1; j < row.length - 1; j++) {
            row[j] = row[j] + row[j + 1]
        }
    }
    return row
}
