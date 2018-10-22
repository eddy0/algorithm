// 先找最小的, 放到第一个位置, 在依次找
// 所以要先保存一个 min value, loop 的时候替换这个 min, loop 完就放到位置上

var selectionSort = function(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i
        // j 在 i 之后比较
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }
        // loop 完之后 swap
        if (i !== min) {
            let temp = array[i]
            array[i] = array[min]
            array[min] = temp
        }
    }
    return array
}
