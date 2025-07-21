/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const tArr = t.split("")

    for (let i = 0; i < s.length; i++) {
        if (tArr.indexOf(s[i]) > -1) {
            const idx = tArr.indexOf(s[i])
            tArr.splice(idx, 1)
        } else {
            return false;
        }
    }
    return true;
};