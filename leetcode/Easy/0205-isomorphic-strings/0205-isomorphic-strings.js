/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map = new Map();
    const tSet = new Set();

    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            if (tSet.has(t[i])) {
                return false;
            }
            map.set(s[i], t[i]);
            tSet.add(t[i])
        } else {
            if (map.get(s[i]) !== t[i]) {
                return false;
            } 
        }
    }

    return true;
};