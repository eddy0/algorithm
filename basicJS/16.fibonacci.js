const log = console.log.bind(console)


// improve the fib in the cache
const fibonacci = (element, cache=[]) => {
    if (cache[element]) {
        return cache[element]
    } else {
        if (element < 2) {
            element = 1
        } else {
            cache[element] = fibonacci(element - 1, cache) + fibonacci(element - 2, cache)
        }
    }
    return cache[element]
}

log(fibonacci(15))