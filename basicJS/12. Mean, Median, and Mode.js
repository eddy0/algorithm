/*
Given an array of numbers, calculate the mean, median, and mode.
平均数, 中位数, 众数

const stat1 = new Stats([1, 2, 3, 4, 4, 5, 5]);
const stat2 = new Stats([1, 1, 2, 2, 3, 3, 4, 4]);
describe("Mean", () => {
 it("Should implement mean", () => {
  assert.equal(Stats.round(stat1.mean()), 3.43);
  assert.equal(Stats.round(stat2.mean()), 2.5);
 });
});
describe("Median", () => {
 it("Should implement median", () => {
  assert.equal(stat1.median(), 4);
  assert.equal(stat2.median(), 2.5);
 });
});
describe("Mode", () => {
 it("Should implement mode", () => {
  assert.deepEqual(stat1.mode(), [4, 5]);
  assert.deepEqual(stat2.mode(), []);
 });
});
 */

const log = console.log.bind(console)


let Stats = (arr) => {
    let obj = {}
    arr = arr.sort((a, b) => a > b)
    let len = arr.length

    const isFloat = (num) => {
         if(num % 1 !== 0 ) {
             let round = 2
             num =  Math.round(num * Math.pow(10, round)) / Math.pow(10, round);
         }
         return num
    }



    const mean = () => {
        let n = arr.reduce((a, b) => {
            return a + b
        }) / len
        return  isFloat(n)

    }

    const median = () => {
        if (len % 2 === 0) {
            let n =  (arr[len / 2] + arr[len / 2 - 1]) / 2
            return  isFloat(n)
        } else {
            let index = Math.floor(len / 2)
            return arr[index]
        }
    }

    const model = () => {
        let obj = {}
        for (let i = 0; i < arr.length; i++) {
            let n = arr[i]
            if (obj[n] === undefined) {
                obj[n] = 1
            } else {
                obj[n] += 1
            }
        }
        let result = []
        let max = Math.max(...Object.values(obj))
        for (let key in obj ) {
            if (obj[key] === max) {
                result.push(Number(key))
            }
        }
        if (result.length === Object.keys(obj).length ) {
            result = []
        }
        return result
    }

    return {
        mean,
        median,
        model
    }
}


const stat1 = Stats([1, 2, 3, 4, 4, 5, 5]);
const stat2 = Stats([1, 1, 2, 2, 3, 3, 4, 4]);

log(stat1.mean())
log(stat1.median())
log(stat1.model())


log(stat2.mean())
log(stat2.median())
log(stat2.model())