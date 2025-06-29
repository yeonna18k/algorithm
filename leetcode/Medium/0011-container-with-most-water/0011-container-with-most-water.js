/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let sIdx = 0;
    let eIdx = height.length - 1;
    let maxWater = 0;

    while (sIdx < eIdx) {
        let currentArea = Math.min(height[sIdx], height[eIdx]) * (eIdx - sIdx);
        maxWater = Math.max(currentArea, maxWater)

        if (height[sIdx] < height[eIdx]) {
            sIdx++; 
        } else {
            eIdx--;
        }

    }

    return maxWater
};