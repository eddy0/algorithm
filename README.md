# algorithm
a conclusion and handbook on data structure and algorithm


#### Recursion

 - function calls itself 
 
 - 实质：Boil down a big problem to smaller ones (size n depends on size n - 1, or n - 2 or ... n/2)
  
 - Implementation： 
    - a) Base cases: smallest problem to solve 
    - b) Recursive rule: how to make the problem smaller (if we can resolve the same problem but with a smaller size, then what is left to do for the current problem size n)

Trick:所以前面的node的个数的总和，都没有最后一层node的个数多，因此我们分析tree的time complexity，往往只看最后一层node的个数。


# How to Implement by JS?

### (ArrayList)[https://github.com/eddy0/algorithm/ArrayList]

- address each individual spaces in the memory
- look up easy, by obj[index]
- delete or insert expensive, need to collapse and re-range. `(所有数据要往前, 生成新的 index)`

#### (LinkList)[https://github.com/eddy0/algorithm/linkList]

- with the help of node (很多节点)
- each node contains value and next node `(只知道上一个节点和下一个节点)`
- node start with node, hand by hand, end with tail `从头到尾`
- lookup by index can only go from head `(查找只能从头循环)`
- delete and insert is super cheap, once found the element, just cut with next `(找到元素之后删除很方便)`
- finding is less expensive than shifting


