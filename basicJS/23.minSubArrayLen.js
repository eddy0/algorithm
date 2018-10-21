/*
write a function called minSubArrayLen
two parameter: array with positive intergers and positive interger

return minimal lengh of continuous subarray of which the sum is greater 
or equal than the parameter 
if not found, return 0


minSubArrayLen([2,3,1,2,4,3], 7) --> 2  最小 [4,3] 能等于7
minSubArrayLen([2,1,6,5,4], 9)  --> 2 
*/

function minSubArrayLen(array, target) {
    let total = 0
    let start = 0
    let end = 0
    let minLen = array.length + 1
    while (start < array.length) {
        if (total < target && end < array.length) {
            total += array[end]
            end++
        } else if (total > target) {
            minLen = Math.min(minLen, end - start)
            total -= total[start]
            start++
        } else {
            break
        }
    }
    return (minLen = array.length + 1 ? 0 : minLen)
}
