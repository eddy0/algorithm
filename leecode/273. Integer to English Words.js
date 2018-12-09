/*
Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

Example 1:

Input: 123
Output: "One Hundred Twenty Three"
Example 2:

Input: 12345
Output: "Twelve Thousand Three Hundred Forty Five"
Example 3:

Input: 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
Example 4:

Input: 1234567891
Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
*/


/**
 * @param {number} num
 * @return {string}
 */

var numberToWords = function(num) {
  let less20 = ['','One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
  let tens = ['', 'Ten', 'Tweenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
  let thousands = ['','Thousand', 'Million', 'Billion']
    
    
  var helper = (n) => {
    if (n < 20) {
      return less20[n % 20] + ' '
    } else if (n < 100) {
      return tens[n / 10] + helper(n % 100)
    } else {
      return less20[num / 100] + 'hundred' + helper(num % 100)
    }
  }
  
  if (num === 0) {
      return 'Zero'
    }
    let i = 0
    let res = ''    
    while (num > 0) {
      n = num % 1000
      if ( n !== 0) {
        res = helper(n) + thousands[i] + ' ' + res
      }
      n = n / 1000
      i++
    }
  return res
};