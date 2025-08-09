/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const result = [];
    let i = 0;
    const n = words.length;

    while (i < n) {
        let lineWords = [];
        let currentLineLength = 0;
        let j = i;

        while (j < n && (currentLineLength + words[j].length + lineWords.length) <= maxWidth) {
            lineWords.push(words[j]);
            currentLineLength += words[j].length;
            j++;
        }

        let line = "";
        const numWords = lineWords.length;
        const totalSpaces = maxWidth - currentLineLength;

        if (j === n || numWords === 1) {
            line = lineWords.join(' ');
            line += ' '.repeat(maxWidth - line.length);
        } else {
            const numGaps = numWords - 1;
            const spacesPerGap = Math.floor(totalSpaces / numGaps);
            const extraSpaces = totalSpaces % numGaps;

            for (let k = 0; k < numWords; k++) {
                line += lineWords[k];
                if (k < numGaps) {
                    const spacesToAdd = spacesPerGap + (k < extraSpaces ? 1 : 0);
                    line += ' '.repeat(spacesToAdd);
                }
            }
        }
        
        result.push(line);
        i = j;
    }

    return result;
};