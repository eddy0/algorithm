/*
There are N gas stations along a circular route, 
where the amount of gas at station i is gas[i].

You have a car with an unlimited gas tank 
and it costs cost[i] of gas to travel from station i to its next station
 (i+1). 
 You begin the journey with an empty tank at one of the gas stations.

Return the starting gas station's index 
if you can travel around the circuit once in the clockwise direction,
 otherwise return -1.

Note:

If there exists a solution, it is guaranteed to be unique.
Both input arrays are non-empty and have the same length.

*/

/*
Input: 
gas  = [1,2,3,4,5]
cost = [3,4,5,1,2]

Output: 3

Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.
*/

/*
Input: 
gas  = [2,3,4]
cost = [3,4,3]

Output: -1

Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.

*/

// 1. 如果总和大于0, 就一定可以走完, 如果小于0, 就不能走完
// 2. i , i+1, i+2, ...累加如果小于0, 那么就要重置路径, 因为有一个值让累加小于0了
// 和求最大连续和是一个道理

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    if (gas.length <= 0 || cost.length <= 0 || gas.length !== cost.length) {
        return -1
    }
    let total = 0
    let sum = 0
    let start = 0
    for (let i = 0; i < gas.length; i++) {
        total += gas[i] - cost[i]
        // sum < 0 表示上一轮累加的和都小于一个站的 cost, 要重置路径
        if (sum < 0) {
            sum = gas[i] - cost[i]
            start = i
        } else {
            sum += gas[i] - cost[i]
        }
    }
    return total < 0 ? -1 : start
}
