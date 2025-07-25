/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
    const rowSets = Array.from({ length: 9 }, () => new Set());
    const colSets = Array.from({ length: 9 }, () => new Set());
    const boxSets = Array.from({ length: 9 }, () => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const num = board[r][c];
            if (num === '.') {
                continue;
            }

            const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            if (rowSets[r].has(num) || colSets[c].has(num) || boxSets[boxIndex].has(num)) {
                return false;
            }

            rowSets[r].add(num);
            colSets[c].add(num);
            boxSets[boxIndex].add(num);
        }
    }

    return true;
};