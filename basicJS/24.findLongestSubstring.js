/*
findLongestSubstring accept a string and returns the length of 
the longest substring with all distinct characters

findLongestSubstring('')  0
findLongestSubstring('rithmschool')  7
findLongestSubstring('thisisawesome')  6
*/

var findLongestSubstring = function(str) {
    let longest = 0
    let obj = {}
    let start = 0
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (obj[char]) {
            start = Math.max(obj[char], start)
        }
        longest = Math.max(longest, i - start + 1)
        obj[char] = i + 1
    }
    return longest
}
