/*

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

Note: You may not engage in multiple transactions at the same time (i.e., 
  you must sell the stock before you buy again).

Example 1:

Input: [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
             Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
Example 2:

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

最多两次买卖, 求最大的profit
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 买的时候设为最小值, 卖的时候有利润了 设置为 0
    let buy1 = -Infinity
    let buy2 = -Infinity
    let sell1 = 0
    let sell2 = 0
    for (let i = 0; i < prices.length; i++) {
        console.log(`$第 ${i + 1} 次`)
        let price = prices[i]
        console.log('price', price)

        sell2 = Math.max(sell2, buy2 + price)
        buy2 = Math.max(buy2, sell1 - price)
        sell1 = Math.max(sell1, buy1 + price)
        buy1 = Math.max(buy1, -price)
        console.log('sell2,', sell2)
        console.log('buy2', buy2)
        console.log('buy1,', buy1)
        console.log('sell1,', sell1)
    }
    return sell2
}

// var prices = [1, 2, 3, 4, 5]
var prices = [3, 3, 5, 0, 0, 3, 1, 4]
maxProfit(prices)
