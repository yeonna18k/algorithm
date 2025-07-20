/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 길이가 다르면 즉시 false 반환
    if (s.length !== t.length) {
        return false;
    }

    const charCount = {};

    // s 문자열의 각 문자 개수를 센다.
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // t 문자열을 순회하며 문자 개수를 줄인다.
    for (const char of t) {
        // t의 문자가 s에 없거나, 개수가 이미 0이면 false
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
};

// 예시
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car"));       // false