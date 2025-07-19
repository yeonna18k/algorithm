/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let leng = 0;
    let left = 0;
    const set = new Set();

    for (let right = 0; right < s.length; right++) {

        while (set.has(s[right])) {
            set.delete(s[left])
            left++
        }
        set.add(s[right])
        leng = Math.max(leng, right - left + 1)

    } 
    return leng
};