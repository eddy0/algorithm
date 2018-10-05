/*
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:
n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function(n) {
    let r = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            r.push('FizzBuzz')
        } else if (i % 3 === 0) {
            r.push('Fizz')
        } else if (i % 5 === 0) {
            r.push('Buzz')
        } else {
            r.push(String(i))
        }
    }
    return r
}

var test = () => {
    var n = 13
    var r = fizzBuzz(n)
    console.log(r)
}

// test()


module.exports = fizzBuzz









