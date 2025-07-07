/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const str = s.trim().replace(/ +(?= )/g, "").split(" ")
    
    return str.at(-1).length;
};