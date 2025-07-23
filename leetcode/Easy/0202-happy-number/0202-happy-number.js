/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set();
    let currentN = n;

    while (!set.has(currentN)) {
        set.add(currentN)
        
        const arrN = currentN.toString().split("")
        const newN = arrN.reduce((acc, cur) => acc + Number(cur) ** 2, 0)

        currentN = newN;
        
    }

    if (currentN === 1) {
        return true;
    } else {
        return false;
    }
};