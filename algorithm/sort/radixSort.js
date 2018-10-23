// 主要用来处理 number 的
// more digist, number larger, 位数越多, 数字越大,
// 先比较个位数排大小排序, 再比较十位数, 以此类推
// 首先要得到 几位数 的 值,
// 从第一位数字开始 sort, 新的 array 再 sort 第二位数
// 这样位数越高, 就越往后

// 先算个位数, 创建 10个位置代表不同的值 0 - 9
// 比较 array 里面的每个值, 放到不同的篮子里面, 然后组成根据位置新的 array
// 再用同样的方法算十位数, 没有位数的值就放到 0 那里里去, 这样0位置的值是已经 sort 好的

var getDigists = function(number, position) {
    return Math.floor(Math.abs(number) / Math.pow(10, position)) % 10
}

var digitCount = function(number) {
    if (number === 0) {
        return 1
    }
    return Math.floor(Math.log10(Math.abs(number))) + 1
}

var mostDigits = function(nums) {
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        let count = digitCount(nums[i])
        max = Math.max(max, count)
    }
    return max
}

var radixSort = function(nums) {
    let len = mostDigits(nums)
    for (let k = 0; k < len; k++) {
        let bucket = Array.from({ length: 10 }, () => [])
        for (let i = 0; i < nums.length; i++) {
            let p = getDigists(nums[i], k)
            bucket[p].push(nums[i])
        }
        nums = [].concat(...bucket)
    }
    return nums
}
