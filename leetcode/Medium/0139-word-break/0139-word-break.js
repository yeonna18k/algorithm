/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j]) {
                const sub = s.substring(j, i);
                if (wordSet.has(sub)) {
                    dp[i] = true;
                    break;
                }
            }
        }
    }

    return dp[n];
};