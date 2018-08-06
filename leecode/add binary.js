/*
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"

Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

 */


/*
用一个 gap 来记录是否需要 +1
binary 的影响来自于 a, b , gap, 这三个值
最多只有 0, 1, 2, 3 这几种情况
最后判断一个 gap 是不是为1, 也就是 index = 0 的时候, 如果为 1 的话说明需要再往前面就一个 '1'

 */


const zeroFill = function(string, len ) {
    if (string.length < len) {
        let l = len - string.length
        for (let i = 0; i < l; i++) {
            string = '0' + string
        }
    }
    return string
}

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function(a, b) {
    let len = Math.max(a.length, b.length)
    a = zeroFill(a, len)
    b = zeroFill(b, len)
    let result = ''
    let gap = 0
    for (let i = len - 1 ; i >= 0 ; i--) {
        let foo = Number(a[i])
        let bar = Number(b[i])
        let sum = foo + bar + gap

        if (sum < 2) {
            result = String(sum) + result
            gap = 0
        } else if (sum === 2 ) {
            result = '0' + result
            gap = 1
        } else if (sum === 3) {
            result = '1' + result
            gap = 1
        }
    }
    if (gap === 1) {
        result = '1' + result
    }

    return result
};


addBinary('1010', '1101')
