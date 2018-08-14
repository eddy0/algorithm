/*
Given an array of items, reverse the order.

reserve is not allowed
describe("Reverse Arrays", () => {
 it("Should reverse arrays", () => {
  assert.deepEqual(reverseArray([1, 2, 3, 4]), [4, 3, 2, 1]);
  assert.deepEqual(reverseArray([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
 });
});
 */

const log = console.log.bind(console)

//1
const reverseArray = (array) => {
    let arr = []
    for (let i = array.length - 1; i >= 0; i--) {
        let n = array[i]
        arr.push(n)
    }
    return arr
}

//2
const reverseArray1 = (array) => {
    for (let i = 0; i < array.length / 2; i++) {
        let [front, end] =  [ array[i], array[array.length - 1 - i] ]
        array[i] = end
        array[array.length - 1 - i ] = front
    }
    return array
}

let r1 = reverseArray1([1, 2, 3, 4, 5])
let r2 = reverseArray([1, 2, 3, 4, 5])


log(r1)
log(r2)