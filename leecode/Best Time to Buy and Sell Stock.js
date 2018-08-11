/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

 */

// 初始化为 0  array 里面 一个从前往后, 一个从后往前判断, 如果有 profit 比 之前的 result 大, 就取代 result
const log = console.log.bind(console)

var maxProfitOriginal = function(prices) {
    let result = 0
    for (let i = 0; i < prices.length; i++) {
        let buy = prices[i]
        for (let j = prices.length - 1; j > i; j-- ) {
            let sell = prices[j]
            let profit = sell - buy
            if (profit > result) {
                result = profit
            }
        }
    }
    return result
};

/**
 * @param {number[]} prices
 * @return {number}
 */
// 这里会把 index 也考虑进来
var maxProfit = function(prices) {
    let result = 0
    let buyDate
    let sellDate
    for (let i = 0; i < prices.length; i++) {
        let buy = prices[i]
        for (let j = prices.length - 1; j > i; j-- ) {
            let sell = prices[j]
            let profit = sell - buy
            if (profit > result) {
                result = profit
                buyDate = i
                sellDate = j
            }
        }
    }

    return [result, buyDate, sellDate]

};

log(maxProfit([7,1,5,3,6,4]))