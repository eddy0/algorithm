/*

For a given number, find all the prime numbers from zero to that number.


describe("Sieve of Eratosthenes", () => {
 it("Should return all prime numbers", () => {
  assert.deepEqual(primes(10), [2, 3, 5, 7]);
 });
});

 */

const isPrime = (n) => {
    if (n < 2) {
        return false
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}


const primes = (num) => {
    let result = []
    for (let i = 2; i <=num; i++) {
        if (isPrime(i)) {
            result.push(i)
        }
    }
    return result
}

console.log(primes(10))