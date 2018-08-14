/*
Given an array of stock prices,
find the minimum buy price and the maximum sell price
that produce the greatest profit.

找买入与卖出最大的利润

describe("Max Profit", () => {
 it("Should return minimum buy price and maximum sell price", () => {
  assert.deepEqual(maxProfit([1, 2, 3, 4, 5]), [1, 5]);
  assert.deepEqual(maxProfit([1, 3, 2, 5, 4]), [1, 5]);
 });
});

 */
const log = console.log.bind(console)

// easy one O(n^2)
const maxProfit = (array) => {
    let profit = 0
    let result = []
    for (let i = 0; i < array.length; i++) {
        let buy = array[i]
        for (let j = array.length - 1; j > i; j--) {
            let sell = array[j]
            let p = sell - buy
            if (p > profit) {
              result = [buy, sell]
              profit = p
            }
        }
    }
    return result
}

const maxProfit1 = (array) => {
    let minBuy = array[0]
    let maxSell = array[1]
    let maxProfit = 0

    for (let i = 1; i < array.length; i++) {
        let sell  = array[i]
        minBuy = Math.min(minBuy, sell)
        let profit = sell - minBuy

        if (profit > maxProfit) {
            maxSell = sell
            maxProfit = profit
        }
    }

    return [minBuy, maxSell]
}





log(maxProfit([1, 2, 3, 4, 5]))
log(maxProfit1([1, 2, 1, 4, 8]))

