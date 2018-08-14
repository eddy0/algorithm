/*
anagrams are words or phrases that contain the same number of characters.
字母是长度相同

describe("Anagrams", () => {
 it("Should implement anagrams", () => {
  assert.equal(anagrams("hello world", "world hello"), true);
  assert.equal(anagrams("hellow world", "hello there"), false);
  assert.equal(anagrams("hellow world", "hello there!"), false);
 });
});
 */

const log = console.log.bind(console)
const assert = require('assert')

// 1. use object
const cleanString = (str) => {
    let letter = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''
    for (let i of str.toLowerCase()) {
        if (letter.indexOf(i) !== -1) {
            result += i
        }
    }
    return result
}

const count = (str) => {
    str = cleanString(str)
    let obj = {}
    for (let s of str) {
        obj[s] = obj[s] === undefined ? 1 : obj[s] + 1
    }
    return obj
}

const anagrams = (str1, str2) => {
    let obj1 = count(str1)
    let obj2 = count(str2)
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
    }

    for (let key in obj1 ) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }

    return true

}


// 2. use sort 给字母排序返回新的 string, 判断 string 相等就可以了

const cleanSort = (str) => {
    str = cleanString(str)
    return str.split('').sort().join('')
}

const anagrams1 = (str1, str2) => {
    str1 = cleanSort(str1)
    str2 = cleanSort(str2)
    return str1 === str2
}

const text_max = () => {
    assert.equal(anagrams('hello world', 'world hello'), true )
    assert.equal(anagrams('hellow world', 'hello there'), false)
    assert.equal(anagrams('hellow world', 'there hello'), false)
    assert.equal(anagrams1('hello world', 'world hello'), true )
    assert.equal(anagrams1('hellow world', 'there hello'), false)
}


text_max()
