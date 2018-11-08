/*

Given a non-negative integer numRows,
 generate the first numRows of Pascal's triangle.


Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 * 每次第一位加上push 一个1, 后面的就是前面加后面
 * push 的时候要创建新的 array, 因为 array 是指针
 */
var generate = function(numRows) {
    let res = []
    let list = []
    for (let i = 0; i < numRows; i++) {
        list.unshift(1)
        for (let j = 1; j < list.length - 1; j++) {
            list[j] = list[j] + list[j + 1]
        }
        res.push([...list])
    }
    return res
}
