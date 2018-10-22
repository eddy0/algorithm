// 精髓就是 swap, 比较前后的值 j 和 j+1 , 如果满足条件就替换
// 多少个 element 就比较多少遍, 然后替换, 像泡泡一样
// 一个一个冒泡, 下面这个方法是先排最大的
var bubbleSort = function(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    console.log(array)
    return array
}

// 第一次loop i 会 sort 最大的值, 那么第一遍过后就把最后一个 sort 好的剔除掉再 loop

var sort = function(array) {
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    return array
}

// 加一个 swap判断 就可以loop 没有结束但是已经全部 sort 好之后跳出循环
// 因为扫了一遍没有发现 j > j+1 的情况
var customize = function(array) {
    let swap
    for (let i = array.length; i > 0; i--) {
        swap = true
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
                swap = false
            }
        }
        if (swap === true) {
            break
        }
    }
    return array
}
