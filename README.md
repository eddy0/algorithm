# algorithm

a conclusion and handbook on data structure and algorithm

#### Recursion

-   function calls itself

-   实质：Boil down a big problem to smaller ones (size n depends on size n - 1, or n - 2 or ... n/2)

-   Implementation：
    -   a) Base cases: smallest problem to solve
    -   b) Recursive rule: how to make the problem smaller (if we can resolve the same problem but with a smaller size, then what is left to do for the current problem size n)

Trick:所以前面的 node 的个数的总和，都没有最后一层 node 的个数多，因此我们分析 tree 的 time complexity，往往只看最后一层 node 的个数。

# solution pattern

-   MULTIPLE POINTERS 多个 pointer 组合

    -   Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
    -   Very efficient for solving problems with minimal space complexity as well
    -   方法

    ```js
    function sumZero(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] === 0) {
                    return [arr[i], arr[j]]
                }
            }
        }
    }

    function sumZero(arr) {
        let left = 0
        let right = arr.length - 1
        while (left < right) {
            let sum = arr[left] + arr[right]
            if (sum === 0) {
                return [arr[left], arr[right]]
            } else if (sum > 0) {
                right--
            } else {
                left++
            }
        }
    }
    ```

-   SLIDING WINDOW

    -   This pattern involves creating a window which can either be an array or number from one position to another
    -   Depending on a certain condition, the window either increases or closes (and a new window is created)
    -   Very useful for keeping track of a subset of data in an array/string etc.

-   Divide and Conquer
    -   This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
    -   This pattern can tremendously decrease time complexity

# How to Implement by JS?

### (ArrayList)[https://github.com/eddy0/algorithm/ArrayList]

-   address each individual spaces in the memory
-   look up easy, by obj[index]
-   delete or insert expensive, need to collapse and re-range. `(所有数据要往前, 生成新的 index)`

#### (LinkList)[https://github.com/eddy0/algorithm/linkList]

-   with the help of node (很多节点)
-   each node contains value and next node `(只知道上一个节点和下一个节点)`
-   node start with node, hand by hand, end with tail `从头到尾`
-   lookup by index can only go from head `(查找只能从头循环)`
-   delete and insert is super cheap, once found the element, just cut with next `(找到元素之后删除很方便)`
-   finding is less expensive than shifting

| number | title   | solution                     | link     |
| ------ | ------- | ---------------------------- | -------- |
| 1      | two sum | 如何解决这个问题就比较麻烦了 | [link]() |
| 2      | flatten | 递归来解决 flatten           | [link]() |
