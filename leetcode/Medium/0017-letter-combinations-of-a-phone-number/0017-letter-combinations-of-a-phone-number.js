/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];

    const mapping = {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'}

    const result = [];

    function backtrack(index, currentCombine) {
        if (index === digits.length) {
            result.push(currentCombine);
            return;
        }

        const letters = mapping[digits[index]];

        for (let i = 0; i < letters.length; i++) {
            backtrack(index + 1, currentCombine + letters[i]);
        }
    }

    backtrack(0, "")

    return result;
};