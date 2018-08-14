/*
describe("Integer Reversal", () => {
 it("Should reverse integer", () => {
  assert.equal(reverse(1234), 4321);
  assert.equal(reverse(-1200), -21);
 });
});
 */

const assert = require('assert')

const reverse = (num) => {
    let s = num.toString()
    s = s.split('').reverse().join('')
    let newNum = parseInt(s, 10)
    return Math.sign(num) * newNum
}

const test_reverse = () => {
    assert.equal(reverse(-100) , -1, '1' )
    assert.equal(reverse(-123) , -321, '2' )
    assert.equal(reverse(134) , 431, '3' )
}

test_reverse()