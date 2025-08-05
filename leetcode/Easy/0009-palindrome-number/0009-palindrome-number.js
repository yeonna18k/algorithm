/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    const original = String(x);
    const reversed = original.split('').reverse().join('');

    return original === reversed;
};