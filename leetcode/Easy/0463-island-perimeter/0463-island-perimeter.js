/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimeter = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                // 같은 열 인접
                if (j === 0) {
                    perimeter++;
                } 
                if (j === grid[i].length - 1) {
                    perimeter++;
                } 
                if (j > 0 && grid[i][j - 1] === 0) {
                    perimeter++;
                } 
                if (j < grid[i].length - 1 && grid[i][j + 1] === 0) {
                    perimeter++;
                }
                // 같은 행 인접

                if (i === 0) {
                    perimeter++;
                }
                if (i === grid.length - 1) {
                    perimeter++;
                }                
                if (i > 0 && grid[i - 1][j] === 0) {
                    perimeter++;
                } 
                if (i < grid.length - 1 && grid[i + 1][j] === 0) {
                    perimeter++;
                }
            }
        }
        console.log(perimeter)
    }
    return perimeter;
};