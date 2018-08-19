/*
12258
abbeh 12258
aveh  1 22 5 8
abyh 1 2 25 8
lbeh 12 2 5 8
lyh  12 25 8
 */

const log = console.log.bind(console)

var numDecodings = function(s) {
    if (!s.length || s[0] === '0') return 0;
    // r2: decode ways of s[i-2] , r1: decode ways of s[i-1]
    var r1 = 1, r2 = 1;
    let result = []

    for (var i = 1; i < s.length; i++) {
        // zero voids ways of the last because zero cannot be used separately
        if (s[i] === '0') r1 = 0;

        // possible two-digit letter, so new r1 is sum of both while new r2 is the old r1
        if (s[i - 1] === '1' || s[i - 1] === '2' && s[i] <= '6') {
            r1 = r2 + r1;
            r2 = r1 - r2;
        }

        // one-digit letter, no new way added
        else {
            r2 = r1;
            result.push( [s[i], s.slice(i+1) ])
        }
    }

    log(result)

    return r1;
}

numDecodings('12258')

const combineCharater = (string) => {
    let letter = '_abcdefghijklmnopqrstuvwxyz'
    let result = ''
    let arr = string.split('')
    for (let i = arr.length - 1; i >= 0; i--) {

    }

    log(result)
}


// combineCharater([1,2,2,5,8])
