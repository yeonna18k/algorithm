/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const sArr = s.split(" ")
    
    if (sArr.length !== pattern.length) return false;

    const map = new Map();
    const sSet = new Set();
    
    for (let i = 0; i < pattern.length; i++) {
        if (!map.has(pattern[i])) {
            if (sSet.has(sArr[i])) {
                return false;
            }
            map.set(pattern[i], sArr[i])
            sSet.add(sArr[i])
        } else {
            if (map.get(pattern[i]) !== sArr[i]) return false;
        }

    }
    return true;
};