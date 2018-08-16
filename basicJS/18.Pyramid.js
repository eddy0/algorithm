/*
For a given number of levels, print out a “pyramid” using hashes and spaces.


describe("Pyramid", () => {
 it("Should print pyramid", () => {
  assert.equal(pyramid(3), "  #  \n ### \n#####\n");
  assert.equal(_pyramid(3), "  #  \n ### \n#####\n");
 });
});
    #
   ###
  #####
 */

// get the hash
// hash = zfill
// '\n hash'
// resulet + '\n'

const log = console.log.bind(console)


const getHash = (n ) => {
    let result = ''
    for (let i = 1; i < n * 2 ; i++) {
        result += '#'
    }
    return result
}

const zfill = (n, length) => {
    let result = n
    let len = 2 * length - 1 - n.length
    for (let i = 0; i < len / 2; i++) {
        result = ' ' + result + ' '
    }
    return result
}

const pyramid = (n) => {
    if (n === 1) {
        return '#'
    }
    result = ''
    for (let i = 1; i <= n; i++) {
       let hash = getHash(i)
        hash = zfill(hash, n)
        result = result + hash + '\n'
    }
    log(`${result}`)
    return result
}

pyramid(3)