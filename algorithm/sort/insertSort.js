// 从第二个 element 开始, 检查位置比前面的是大了还是小了, 放在大小的之间的位置
// 默认第一个是排序的, 后面的元素依次往前比较, 如果比前面的小, 就 swap 位置
// 一直到无法 swap, 也就是排序好了, 再比较后面的元素

var insertionSort = function(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {
            ;[array[j], array[j - 1]] = [array[j - 1], array[j]]
        }
    }
    console.log(array)
    return array
}
