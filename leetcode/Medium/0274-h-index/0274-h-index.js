/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const leng = citations.length;
    // if (leng === 1 && citations[0] > 0) return 1;

    citations.sort((a, b) => b - a);

    let max = 0;

    for (let i = 0; i < leng; i++) {
        if (citations[i] === 0) continue;

        if (i + 1 <= citations[i]) max++;
    }
     return max;
};