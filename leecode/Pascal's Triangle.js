/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

1 [1]
2 [[1], [1,1]]
3 [ [1], [1,1], [1,1,1]  ]
 */

const pushRow = (row) => {
    for (let i = 0; i < row + 1; i++) {

    }
}

/**
 * @param {number} numRows
 * @return {number[][]}
 */

// 下一行的是上一行 index -1 + index 之和


var generate = function(numRows) {
    if (numRows === 0) {
        return []
    }
    let result = [[1]]
    for (let i = 1; i < numRows; i++) {
        result[i] = [1]
        for (let j = 1; j <  i + 1; j++) {
            result[i][j] = result[i - 1][j - 1] + ( result[i - 1][j] || 0 )
        }
    }
    return result
};


var generateIndex = function(numRows) {
    let array = generate(numRows + 1)
    return array[array.length - 1 ]
};

console.log(generateIndex(0))