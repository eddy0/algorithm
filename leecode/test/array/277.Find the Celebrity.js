/*
Suppose you are at a party with n people (labeled from 0 to n - 1) 
and among them, there may exist one celebrity. 
The definition of a celebrity is that all the other n - 1 people know
 him/her but he/she does not know any of them.

Now you want to find out who the celebrity is
 or verify that there is not one. 
 The only thing you are allowed to do is to ask questions like: "Hi, A. Do you know B?"
  to get information of whether A knows B. 
  You need to find out the celebrity (or verify there is not one)
   by asking as few questions as possible (in the asymptotic sense).

You are given a helper function bool knows(a, b) 
which tells you whether A knows B. 
Implement a function int findCelebrity(n), 
your function should minimize the number of calls to knows.

Note: There will be exactly one celebrity if he/she is in the party.
Return the celebrity's label if there is a celebrity in the party. 
If there is no celebrity, return -1.

名人: 所有人都认识他, 他不认识其他人
*/

function knows(a, b) {
    return true
}

/**
 * T o(n) S O(1)
 * @param {number} n
 */

function findCelebrity(n) {
    if (n < 2) {
        return -1
    }
    let possible = 0
    for (let i = 1; i < n; i++) {
        // 如果possible认识 i, p肯定不是名人, 而 i 可能是
        if (knows(p, i)) {
            possible = i
        }
    }
    // 确认一遍 possible 是不是
    for (let i = 0; i < n; i++) {
        if (possible !== i) {
            if (knows(possible, i) || !knows(i, possible)) {
                return -1
            }
        }
        return possible
    }
}
