/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const result = s.split("")
    let left = 0;
    let right = result.length - 1;

    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"])

    while (left < right) {
        while (left < right && !vowels.has(result[left])) {
            left++;
        }

        while (left < right && !vowels.has(result[right])) {
            right--;
        }

        if (left < right) {
            [result[left], result[right]] = [result[right], result[left]]
            left++;
            right--;
        } 
    }
    return result.join("")
};