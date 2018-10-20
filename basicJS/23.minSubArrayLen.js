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
    for (let i = 0; i < array.length; i++) {
        let n = array[n]
        if (n >= target) {
            return n
        }
    }
}
