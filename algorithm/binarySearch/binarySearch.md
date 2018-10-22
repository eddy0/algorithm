#### binary search

精髓: 二分法, 每次砍一半

```js
// return any target element's index
const binarySearch = (arr, target) => {
    if (arr.length > 0) {
        let length = arr.length
        const index = Math.floor(length / 2)
        const mid = arr[index]
        if (mid === target) {
            return true
        } else if (mid > target) {
            return binarySearch(arr.slice(0, index), target)
        } else {
            return binarySearch(arr.slice(index + 1), target)
        }
    } else {
        return -1
    }
}
```

#### 2d binary search

```
1  2  3  4
5  6  7  8
9 10 11  12
arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
把二维的变成一维
```
