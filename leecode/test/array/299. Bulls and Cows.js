/*
You are playing the following Bulls and Cows game with your friend: 
You write down a number and ask your friend to guess what the number is.
 Each time your friend makes a guess, you provide a hint that indicates 
 how many digits in said guess match your secret number exactly 
 in both digit and position (called "bulls") 
 and how many digits match the secret number 
 but locate in the wrong position (called "cows"). 
 
 Your friend will use successive guesses and hints to eventually 
 derive the secret number.

Write a function to return a hint 
according to the secret number and friend's guess, 
use A to indicate the bulls and B to indicate the cows. 

Please note that both secret number and friend's guess 
may contain duplicate digits.
 */

/*
Input: secret = "1807", guess = "7810"

Output: "1A3B"

Explanation: 1 bull and 3 cows. The bull is 8, the cows are 0, 1 and 7.
 */

/*
 Input: secret = "1123", guess = "0111"

Output: "1A1B"

Explanation: The 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow.
 */

// T  O(n)
// S O(1)

var getHint = function(secret, guess) {
    let cows = 0
    let bull = 0
    // 个位最多 0-9, 创建一个 array, 全是0, 如果 i 和值都相等, 就是 bull
    // 否则, 在 count 的位置上面记录下来, secrect[i] ++ 之后还小于0, 说明有一个相同的被减去了
    // guess-- 之后还大于等于0, 说明有一个被抵消掉了
    // 两个相互比较, 一个++, 一个--, 如果全部相等就是为 array 所有的值都是 0
    let count = new Array(10).fill(0)
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bull += 1
        } else {
            count[Number(secret[i])]++
            if (count[Number(secret[i])] <= 0) {
                cows++
            }
            count[Number(guess[i])]--
            if (count[Number(guess[i])] >= 0) {
                cows++
            }
        }
    }

    return bull + 'A' + cows + 'B'
}
