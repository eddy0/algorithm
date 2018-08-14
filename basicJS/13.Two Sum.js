/*
Given an array of numbers,
return all pairs that add up to a given sum. The numbers can be used more than once.

返回所有可能相加为目标的值

describe("Two Sum", () => {
 it("Should implement two sum", () => {
  assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
 });
});

 */
const log = console.log.bind(console)

//1
const twoSum = (array, target) => {
    let result = []
    for (let i = 0; i < array.length; i++) {
        let a = array[i]
        for (let j = array.length - 1; j > i ; j--) {
            let b = array[j]
            if (a + b === target) {
                result.push([a, b])
            }
        }
    }
    return result
}

//2 find pair 找同伴  把查过的值放到另外一个 array,
//  target - array[i] 如果在另外那个 array 里面能找到
// 说明是存在一对 相加为 target 的

const twoSum1 = (array, target) => {
    let store = []
    let pairs = []
    for (let i = 0; i < array.length; i++) {
        let a = array[i]
        let pair = target - a
        if (store.includes(pair)) {
            pairs.push([a, pair])
        }
        store.push(a)
    }

    log(pairs)
    return pairs
}


twoSum([1,2,2,3,4,5], 4)
twoSum1([1,2,2,3,4,5], 4)