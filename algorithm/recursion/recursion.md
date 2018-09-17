#### Recursion

 - function calls itself 
 
 - 实质：Boil down a big problem to smaller ones (size n depends on size n - 1, or n - 2 or ... n/2)
  
 - Implementation： 
    - a) Base cases: smallest problem to solve 
    - b) Recursive rule: how to make the problem smaller (if we can resolve the same problem but with a smaller size, then what is left to do for the current problem size n)

Trick:所以前面的node的个数的总和，都没有最后一层node的个数多，因此我们分析tree的time complexity，往往只看最后一层node的个数。

####  Fibonacci
1. Base case: F(0) = 0, F(1) = 1
2. Recursive rule: F(n) = F(n-1) + F(n-2)
```js
const fibo = (n) => {
  if (n === 0)
    return 0
  else if (n === 1)
    return 1
  else 
    return fibo(n-1) + fibo(n-2)
}
```