/*
Given a number as an input, print out every integer from 1 to that number.
However, when the integer is divisible by 2, print out “Fizz”;
when it’s divisible by 3, print out “Buzz”;
when it’s divisible by both 2 and 3, print out “Fizz Buzz”.
 */

const log = console.log.bind(console)


let fizzBuzz = (num) => {
    let arr = []
    for (let i = 1; i <= num; i++) {
        if (i % 6 === 0) {
            arr.push('fizz buzz')
        } else if (i % 2 === 0) {
            arr.push('fizz')
        } else if (i % 3 === 0) {
            arr.push('buzz')
        } else {
            arr.push(i)
        }
    }
    log(arr)
    return arr
}

fizzBuzz(30)