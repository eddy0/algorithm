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

-   1, 3, 5, 7, 9, 8, 6, 4, 2, 0
-  1st: 1 3 5 7 9
-  2nd: 0 2 4 6 8
-  combine them: 谁小移谁
-  time complexity: O(nlogn) ---> 切分是 n, 排序是 nlogN,  二分法一共 lg(n) 次划分, 每层排序为 n 
-  space complexity: O(n), 用了 dfs
-  把 array 改为 linkList 的时间复杂度也是 nlogn  ---> 切分是 nlogN, 排序是 nlogN
```
         1, 3, 5, 7, 9, 8, 6, 4, 2, 0
            /                   \
        13579                  86420
        /   \                   /  \
     135    79                864   20
     / \                     / \ 
    13  5   7  9            46  8   2 0
       13579                  02468
               0123456789
```

#### 3. Quick sort
 principle: iterate over the whole array, and put all numbers smaller than pivot to the left, then put the pivot following (all numbers larger than the pivot are already on the pivot's right hand)
 
 implementation details: first put the pivot to the right most position (swap(arr[pivot], arr[right])).
 
- 随机选一个 pivot, <= pivot 放左边, >= pivot 放右边, 重新选 pivot, 以此类推
- 与 merge sort 的区别是, merge sort 是正好每次往中间切

- 两个挡板 i j ,三个区域 a) b) c) 的思想：
  - a) [0...i) :   i 的左侧（不包含i） 全部为比 pivot 小的数
  - b) [i...j]:    i 和 j 之间为未知探索区域
  - c) (j...n-1]:  j 的右侧(不包含j) 全部为比 pivot 大或等于的数字

 1st Question:
 what  is the final position of 5?  5 is randomly selected (5 is called pivot).
 
 principle:
 iterate over the whole array, and put all numbers smaller than 5 to the left, then put 5 following (all numbers larger than 5 are already on 5’s r-hand).
 
 implementation details:
 first put 5 to the right most position (swap(5, 3)).