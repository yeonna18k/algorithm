/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim().replace(/ +(?= )/g, "").split(" ")
    return s.reverse().join(" ")
};