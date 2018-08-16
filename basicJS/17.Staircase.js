/*
For a given number of steps, print out a “staircase” using hashes and spaces.

describe("Steps", () => {
 it("Should print steps", () => {
  assert.equal(steps(3), "#  \n## \n###\n");
  assert.equal(_steps(3), "#  \n## \n###\n");
 });
});

#
##
###

 */


const log = console.log.bind(console)


const getHash = (n) => {
    let result = ''
    for (let i = 0; i < n; i++) {
        result += '#'
    }
    return result
}

const steps = (n) => {
    if (n === 1) {
        return '#'
    }
    let result = '#'
    for (let i = 2; i <= n; i++) {
        let hash = getHash(i)
        result += ' \n' + hash
    }
    log(result)
    return result + '\n'
}


steps(6)