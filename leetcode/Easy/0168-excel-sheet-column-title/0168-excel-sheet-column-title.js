/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = '';
    const baseCharCode = 'A'.charCodeAt(0);

    while (columnNumber > 0) {
        const remainder = (columnNumber - 1) % 26;

        const char = String.fromCharCode(baseCharCode + remainder);
        
        result = char + result;
        
        columnNumber = Math.floor((columnNumber - 1) / 26);
    }

    return result;
};