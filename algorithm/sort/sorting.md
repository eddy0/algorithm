## Sorting Algorithms
    - selecting sort
    - merge sort
    - quick sort
    - bubble sort
    - bucket sort
    - patient sort
    - smooth sort
    - cocktail sort


#### 1. selector sort

思路: 每次找到最小值, 拿出来放到一个新数组, 不断的 push 最小值到新数组去

[-1, -3, 4, 7] ==> [-3, -1, 4, 7]

1. 遍历找到最小值 -3, 放到最左边 -3 [-1, 4, 7]
2. 遍历新数组, 找到最小值 -1, 放到新的地方, [-3, -1],  [4,7]
3. ...以此类推

不借用 array 的话, 就找 index, 然后互换
如果借用 index 的话, 就 push 和 splice


#### 2. Merge sort

中心思想是二分法, 不断的二分

