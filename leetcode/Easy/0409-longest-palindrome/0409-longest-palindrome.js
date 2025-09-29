/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
        const counts = new Map();
    for (const char of s) {
        counts.set(char, (counts.get(char) || 0) + 1);
    }

    let length = 0;
    let hasOdd = false;

    for (const count of counts.values()) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1;
            hasOdd = true;
        }
    }

    if (hasOdd) {
        length += 1;
    }

    return length;
};