/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.
 
 */

function sortStr(s) {
    return s
        .split('')
        .sort()
        .join('')
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // first sort from a - z, then compare
    let s1 = sortStr(s)
    let t1 = sortStr(t)
    return s1 === t1
}

var _isAnagram = function(s, t) {
    let o = {}
    for (let key of s) {
        o[key] = o[key] === undefined ? 1 : o[key] + 1
    }
    for (let k of t) {
        if (o[k] === undefined || o[k] === 0) {
            return false
        }
        o[k] -= 1
    }
    console.log(o)
    return true
}

let test = _isAnagram('anagram', 'nagaram')
console.log(test)
