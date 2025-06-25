/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxDiff = 0;
    let min = prices[0];

    for (let i = 1; i < prices.length; i++) {
        const diff = prices[i] - min;
        if (min > prices[i]) {
            min = prices[i]
        } else if (min < prices[i] && diff > maxDiff) {
            maxDiff = diff;
        }

    }
    return maxDiff;
};