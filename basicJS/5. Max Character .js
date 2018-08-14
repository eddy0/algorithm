/*
Given a string of characters, return the character that appears the most often.

"Hello World!" => "l"
 */

const log = console.log.bind(console)
const assert = require('assert')

const max = (str) => {
    let obj = {}
    for (let i of str) {
        if (obj[i] === undefined) {
            obj[i] = 1
        } else {
            obj[i] = obj[i] + 1
        }
    }

    return  Object.keys(obj).reduce((a, b) => {
        if (obj[a] > obj[b]) {
            return a
        } else {
            return b
        }
    })

}

const text_max = () => {
    assert.equal(max('hello wrold'), 'l')
}


text_max()


