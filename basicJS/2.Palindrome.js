/*
describe("Palindrome", () => {
 it("Should return true", () => {
  assert.equal(isPalindrome("Cigar? Toss it in a can. It is so tragic"), true);
 });
 it("Should return false", () => {
  assert.equal(isPalindrome("sit ad est love"), false);
 });
});

 */

const assert = require('assert')

const isPalindrome = (string) => {
    let letter = 'abcdefghijklmnopqrstuvwxwz'
    let cleanedString = string
        .toLowerCase()
        .split('')
        .reduce((a, b) => {
            if (letter.indexOf(b) !== -1) {
                return a + b
            } else {
                return a
            }
        })
    return (
        cleanedString ===
        cleanedString
            .split('')
            .reverse()
            .join('')
    )
}

const test_isPalindrome = () => {
    let s1 = 'hello world!'
    let s2 = 'Cigar? Toss it in a can. It is so tragic'
    let s3 = 'wooW'
    assert.equal(isPalindrome(s1), false, '1')
    assert.equal(isPalindrome(s2), true, '2')
    assert.equal(isPalindrome(s3), true, '3')
}

test_isPalindrome()
