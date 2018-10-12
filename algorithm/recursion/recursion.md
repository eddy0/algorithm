#### Recursion

- function calls itself

- 实质：Boil down a big problem to smaller ones (size n depends on size n - 1, or n - 2 or ... n/2)

- Implementation：
  - a) Base cases: smallest problem to solve
  - b) Recursive rule: how to make the problem smaller (if we can resolve the same problem but with a smaller size, then what is left to do for the current problem size n)

Trick:所以前面的 node 的个数的总和，都没有最后一层 node 的个数多，因此我们分析 tree 的 time complexity，往往只看最后一层 node 的个数。

#### Fibonacci

1. Base case: F(0) = 0, F(1) = 1
2. Recursive rule: F(n) = F(n-1) + F(n-2)

```js
const fibo = (n) => {
  // 进入 function 之后先看是否要停下来
  if (n === 0) return 0
  else if (n === 1) return 1
  else return fibo(n - 1) + fibo(n - 2)
}
```

Recursive tree 的分析方法, 一层一层分析

- time : 2^n ---> 1 + 2 + 8 + ... + 2^n-1
- space: o(n) ---> 深度优先原则, 有 breaking point

* 时间复杂度取决于有多少 node
* 空间复杂度取决于 callstack, 有多少层 callstack

#### callstack --- 保存变量

1. global accessible resource
2. usage: store the local information for each recursion function

#### a ^ b

```js
const pow = (a, b) => {
  // base case
  if (b === 0) {
    return 1
  }
  let half = pow(a, b / 2)
  if (b % 2 === 0) {
    return half * half
  } else {
    return half * half * 2
  }
}
// time log(b)
// psace log(b)
```

分析:

```
    1000
     |
    500
     |
    250
    ...
     |
     1
每次都扔掉一半
```

#### 反转 Linklist
