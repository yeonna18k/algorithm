/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sMap = new Map();
    let tMap = new Map();

    for (const str of t) {
        tMap.set(str, tMap.get(str) + 1 || 0)
    }

    for (const str of s) {
        if (tMap.get(str) > 0) {
            tMap.set(str, tMap.get(str) - 1)
        } else {
            tMap.delete(str)
        }
    }

    return [...tMap.keys()].join("")
};