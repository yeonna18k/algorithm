/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 1) {
        return [[1]];
    } else if (numRows === 2) {
        return [[1], [1, 1]]
    }

    const result = [[1], [1, 1]];
    let loop = 3;

    while (loop <= numRows) {
        const newRow = [1];
        for (let i = 0; i < loop - 2; i++) {
            newRow.push(result[loop-2][i] + result[loop-2][i+1])
        }
        newRow.push(1)
        result.push(newRow)
        loop++;
    }
    return result;
};