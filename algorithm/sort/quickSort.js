// 选择一个 pivot, 小的放左边, 大的放右边, 然后递归排序
// 与 mergesort 有点相似, 但是主要是选的 pivot 不同, merge sort 每次是选中间
// quick sort 是选择任意的 pivot

// 理想的情况是 pivot 选取到中位数
// 以下方式增加 extra space
var helper = function(array, start, end) {
    var swap = function(arr, i, j) {
        return ([arr[i], arr[j]] = [arr[j], arr[i]])
    }

    let pivot = array[start]
    let index = start
    for (let i = start + 1; i <= end; i++) {
        if (array[i] < pivot) {
            index++
            swap(array, index, i)
        }
    }
    swap(array, start, index)
    return index
}

var quickSort = function(array, left = 0, right = array.length - 1) {
    if (left < right) {
        let pivot = helper(array, left, right)
        quickSort(array, left, pivot - 1)
        quickSort(array, pivot + 1, right)
    }
    return array
}

// 容易理解的方式, 大的放左边的 array, 小的放右边的 array, 但是创建了 extra space
var quick = function(array) {
    if (array.length <= 1) {
        return array
    }
    let left = []
    let right = []
    let pivot = array[array.length - 1]
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    return [...quick(left), pivot, ...quick(right)]
}
