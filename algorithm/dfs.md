#### dfs 基本方法

    - what does it store on each level 每层代表什么意义, 要 recursion 多少层
    - how many different state should we try to put on this level 每层有多少个状态 / case 要 try
    - 在 try 同层的不同 node 的时候, 需要回到母节点层, 再下到下一层的右边, 需要做回溯操作,

1. print all subset of a set S = {'a', 'b', 'c'}

```
改成dfs
                       {}
a 层            {a}                    {}
b 层       {a,b}      {a}          {b}     {}
c 层  {a, b, c} {a,b}  {a,c}    {b c}     {c}
```

2. ()()() find all valid permitation using the parenthesis provided 找所有的括号

```
1. what does it store on each level:  6 level, each level represents a position in which we could place a either ( or )
2. how many different state should we try to put on this level 每层有多少个状态 / case 要 try --- 2  ( or )
3. 什么时候可以加 ( ?  --- 只要有 ( 就可以加
4. 什么时候可以加 ) ?   --- 只有 ( 存在才可以, ( 的数量大于 ) 的数量
```

```js
// n stores total number of pair of ()
// l is the number of left parathesis
// r is the number of right parathesis
// solution_prefix: solution so far
const DFS = function(n, l, r, solution_prefix) {
  // base case, l + r 等于  一共多少对
  if (l === n && r === n) {
    console.log(solution_prefix)
    return
  }
  if (l < n) {
    solution_prefix.push('(')
    DFS(n, l + 1, r, solution_prefix)
    solution_prefix.pop()
  }
  if (r < l) {
    solution_prefix.push('(')
    DFS(n, l, r + 1, solution_prefix)
    solution_prefix.pop()
  }
}
```

3. print all combinations of coins that can sum up to value k, eg: total k = 99 cent, coin value = 25 10 5 1

```
1. what many recursion :  4 层, 4 type of coin
2. 每层有多少个状态 / case 要 try --- dynamic change by coins' value
```

4. give a string with no duplicated letters, print out all pemutations of the string

```
每次减掉一个

                  abc
         a(bc)  b(ac)  c(ab)
    b(c) c(b) a(c) c(a)  a(b)  b(a)
```
