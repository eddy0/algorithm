/*
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = -2, b = 3
Output: 1

 */

// 有一个array 如果是 > 0 , 就 push, 如果是 < 0, 就 pop, 最后得到的是 length
// array 为 0 的时候怎么 pop

var numberToArr = function(a) {
    let n = []
    a = Math.abs(a)
    for (let i = 0; i < a; i++) {
        n.push(1)
    }
    return n
}

var convertNumberToArray = function(large, small) {
    let n = []
    for (let i = 0; i < large; i++) {
        n.push(1)
    }
    for (let i = 0; i < small; i++) {
        n.pop()
    }
    return n.length
}

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let c1 = a >= 0 && b >= 0
    let c2 = a <= 0 && b <= 0
    // 确定符号
    if (c1 || c2) {
        let m = numberToArr(a)
        let n = numberToArr(b)
        let sum = [m].concat(n).length
        return c1 > 0 ? sum : -sum
    } else {
        let m = Math.abs(a)
        let n = Math.abs(b)
        let max = Math.max(m, n)
        // max = m > 0 max = m < 0
        console.log('m,n,max', m,n,max)
    
        let minus = max === m ? n: m
        let sum = convertNumberToArray(max, minus)
        console.log('sum', sum)
    
        if (max === m) {
            return a > 0 ? sum : -sum
        } else if (max === n) {
            return b > 0 ? sum : -sum
        }
    }
}

console.log(getSum(-10, 5))











