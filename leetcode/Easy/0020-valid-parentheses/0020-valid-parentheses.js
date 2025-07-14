/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length <= 1) return false;

    const arr = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            arr.push(s[i])
        } else {
            const last = arr.pop()
            if (!last) return false;
            if (last === "(" && s[i] !== ")") return false;
            if (last === "[" && s[i] !== "]") return false;
            if (last === "{" && s[i] !== "}") return false;
        }
    }

    if (arr.length > 0) return false;

    return true;
};