/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0;
    let baseCode = 'A'.charCodeAt(0);

    for (let i = 0; i < columnTitle.length; i++) {
        const char = columnTitle[i];
        const value = char.charCodeAt(0) - baseCode + 1

        result = (result * 26) + value
    }

    return result;
};
