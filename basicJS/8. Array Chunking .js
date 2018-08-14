/*
Given an array and a size,
split the array items into a list of arrays of the given size.

describe("Array Chunking", () => {
 it("Should implement array chunking", () => {
  assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
  assert.deepEqual(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
  assert.deepEqual(chunk([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);
 });
});
 */
const log = console.log.bind(console)

//1, while
const chunk = (array, size) => {
    let len = array.length
    if (size >= len) {
        return [array]
    }
    let arr = []
    while(array.length >= size) {
        let n = array.splice(0, size)
        arr.push(n)
    }
    return arr.concat([array])
}


// 2 slice
const chunk1 = (array, size) => {
    let chunk = []
    for (let i = 0; i < array.length; i += size) {
        let n = array.slice(i, i + size)
        chunk.push(n)
    }
    return chunk
}


log(chunk([1, 2, 3, 4, 5], 5))
log(chunk1([1, 2, 3, 4, 5], 2))