/*
Given a phrase, substitute each character by
shifting it up or down the alphabet by a given integer.
If necessary, the shifting should wrap around back to the beginning or end of the alphabet.

describe("Caesar Cipher", () => {
 it("Should shift to the right", () => {
  assert.equal(caesarCipher("I love JavaScript!", 100), "E hkra FwrwOynelp!");
 });
it("Should shift to the left", () => {
  assert.equal(caesarCipher("I love JavaScript!", -100), "M pszi NezeWgvmtx!");
 });
});

 */

const log = console.log.bind(console)

const assert = require('assert')


const caesarCipher = (string, shift) => {
    let upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    let len = lowerAlphabet.length
    let result = ''
    for (let str of string) {
        let index = lowerAlphabet.indexOf(str.toLowerCase())
        if (index !== -1) {
            let alphabet = str === lowerAlphabet[index] ? lowerAlphabet : upperAlphabet
            index = (index + shift + Math.abs(shift) * len ) % len
            result += alphabet[index]
        } else {
            result += str
        }
    }
    log(result)
    return result
}


assert.equal(caesarCipher("I love JavaScript!", 100), "E hkra FwrwOynelp!")
assert.equal(caesarCipher("I love JavaScript!", -100), "M pszi NezeWgvmtx!")