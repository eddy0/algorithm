/*
max binary heap 的 root 比 children 大, children 之间的大小没有联系
min binary heap 是 每一个 node 的 root 比 children 都小

作用: 用来 implement priority queue, graph traversal

性质:  n 个 element 的 array, left child 存在 2n + 1, right child 存在 2n+2
child 的 parent 在 index floor (n - 1 ) / 2 的位置

增加:  先 push 进去, 再和上一层的比较, 然后 swap 掉, bubble up

remove: 删除之后, 把最后一个元素提到第一个去, 然后比较左右两边, 往下沉
*/

class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    bubble() {
        let index = this.values.length - 1
        let element = this.values[index]
        while (index > 0) {
            let p = Math.floor((index - 1) / 2)
            let parent = this.values[p]
            if (element > parent) {
                this.values[index] = parent
                this.values[p] = element
                index = p
            } else {
                break
            }
        }
    }
    insert(val) {
        this.values.push(val)
        this.bubble()
    }

    down() {
        let index = 0
        let element = this.values[0]
        let length = this.values.length
        while (index < length) {
            let leftIndex = 2 * index + 1
            let rightIndex = 2 * index + 2
            let left
            let right
            if (leftIndex < length) {
                left = this.values[leftIndex]
            }
            let swap = true

            if (swap) {
                break
            }
        }
    }

    extractMax() {
        let max = this.vales[0]
        let end = this.vales.pop()
        this.values[0] = end
        this.down()
        return max
    }
}
