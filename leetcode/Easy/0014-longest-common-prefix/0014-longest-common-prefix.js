/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let pre = strs[0].split("")
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length === 0) return "";
        for (let j = 0; j < strs[i].length; j++) {
            pre = pre.slice(0, strs[i].length)

            if (pre[j] !== strs[i][j]) {
                pre = pre.slice(0, j)
            } 
        }
    }
    return pre.join("");
};