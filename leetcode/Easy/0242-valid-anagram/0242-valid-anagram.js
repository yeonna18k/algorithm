/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const tMap = new Map();
    for (const str of t) {
        tMap.set(str, tMap.get(str) + 1 || 1)
    }

    for (let i = 0; i < s.length; i++) {
        if (tMap.has(s[i])) {
            const tCount = tMap.get(s[i])
            if (tCount > 1) {
                tMap.set(s[i], tCount - 1)
            } else {
                tMap.delete(s[i])
            }
        } else {
            return false;
        }
    }
    return true;
};