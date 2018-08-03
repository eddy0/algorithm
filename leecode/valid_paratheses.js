/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Input: "([)]"
Output: false
 */

const {log} = require('../utils')
const assert = require('assert')

var isValid = function(s) {
    let map = {
        '(': ')',
        '[': ']',
        '{': '}',
    }

    let stack = []
    for (let i = 0; i < s.length; i++) {
        let key = s[i]
        let value = map[key]
        if (value) {
            stack.push(value)
        } else {
            if (key !== stack.pop()) {
                return false
            }
        }
    }

    return stack.length === 0

}


const test = () => {
    assert.equal(isValid('[{()}]'), true, '1 is wrong')
}

test()