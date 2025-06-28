/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const valid = s.toLowerCase().replace(/[^a-z0-9]/g, "")

    for (let i = 0; i < valid.length / 2; i++) {
        if (valid[i] !== valid.at(-(i+1))) return false;
    }
    return true;
};