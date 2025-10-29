/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if (n <= 0) {
        return [];
    }

    const matrix = Array.from({ length: n }, () => Array(n).fill(0));

    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;

    let num = 1;
    const totalElements = n * n;

    while (num <= totalElements) {
        for (let c = left; c <= right; c++) {
            matrix[top][c] = num++;
        }
        top++;

        if (top > bottom) break;

        for (let r = top; r <= bottom; r++) {
            matrix[r][right] = num++;
        }
        right--;

        if (left > right) break;

        for (let c = right; c >= left; c--) {
            matrix[bottom][c] = num++;
        }
        bottom--;

        if (top > bottom) break;

        for (let r = bottom; r >= top; r--) {
            matrix[r][left] = num++;
        }
        left++;

        if (left > right) break;
    }

    return matrix;
};