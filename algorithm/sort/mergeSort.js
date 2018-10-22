const mergeSort = (array) => {
    // base case
    if (array.length < 2) {
        return array
    }
    const length = array.length
    let mid = Math.floor(array.length / 2)
    const left = array.slice(0, mid)
    const right = array.slice(mid)
}

// 比较两个 sorted array
var mergeHelp = function(arr1, arr2) {
    let result = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }
    if (i === arr1.length) {
        return result.concat(arr2.slice(j))
    } else {
        return result.concat(arr1.slice(i))
    }
}
// recursion 就是先处理一边一头扎到底然后反弹回去, 再处理另一边一头扎到底反弹,
// 最后合并
// time complexity, recursion 有多少层, 每层计算多少次

var merge = function(array) {
    if (array.length <= 1) {
        return array
    }
    let index = Math.floor(array.length / 2)
    let left = merge(array.slice(0, index))
    let right = merge(array.slice(index))
    return mergeHelp(left, right)
}

// A1B2C3D4 -> ABCD1234
/*
                A1B2C3D4
            A1B2        C3D4
          A 1 B 2      C 3 D 4
            AB12        CD34
               ABCD1234
 */
