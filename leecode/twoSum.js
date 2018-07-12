var twoSum = function(nums, target) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
       let a = nums[i]
       for (let j = nums.length - 1; j > i; j--) {
           let b = nums[j]
           if ( a + b === target) {
               result.push(i, j)
           }
       }
    }
    return result
};



const testTwoSum = () => {
    let nums = [2, 7, 11, 15]
    let target = 9
    // [0,1]
     twoSum(nums, target)
}

testTwoSum()
