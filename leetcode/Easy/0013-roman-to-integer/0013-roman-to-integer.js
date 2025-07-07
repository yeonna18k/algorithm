/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {'I':1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}

    return s.split("").map((sym, idx) => {
        if (idx === 0) return roman[sym]
        if ((sym === 'V' || sym === 'X') && s[idx - 1] === 'I') {
            return roman[sym] - 2;
        } else if ((sym === 'L' || sym === 'C') && s[idx - 1] === 'X') {
           return roman[sym] - 20; 
        } else if ((sym === 'D' || sym === 'M') && s[idx - 1] === 'C') {
            return roman[sym] - 200; 
        } else {
            return roman[sym]
        }
}).reduce((acc, cur) => acc + parseInt(cur), 0);
};