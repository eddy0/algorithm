/*
describe("String Reversal", () => {
 it("Should reverse string", () => {
  assert.equal(reverse("Hello World!"), "!dlroW olleH");
 });
});

 */

const assert = require('assert')

// 1.
const reverse1 = (string) => {
    return string.split('').reverse().join('')
}

// 2
const reverse2 = (string) => {
    let result = ''
    for (let s of string) {
        result = s + result
    }
    return result
}

//3
const reverse3 = (string) => {
    return string.split('').reduce((a, b) => b + a)
}


const testReverse = () => {
    let s = 'hello world!'
    assert.equal(reverse1(s) , '!dlrow olleh', )
    assert.equal(reverse2(s) , '!dlrow olleh', )
    assert.equal(reverse3(s) , '!dlrow olleh', )
}

testReverse()