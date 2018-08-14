/*
Given a string of words or phrases, count the number of vowels.

 */

const vowels = (str) => {
    let vowel = ['a', 'e', 'i', 'o', 'u' ]
    let count = 0
    for (let i = 0; i < str.length; i++) {
        let n = str[i]
        if (vowel.includes(n)) {
            count += 1
        }
    }
    return count
}