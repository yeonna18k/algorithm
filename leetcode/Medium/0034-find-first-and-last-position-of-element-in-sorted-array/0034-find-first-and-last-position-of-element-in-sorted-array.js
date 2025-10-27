/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const findBound = (nums, target, isFindingStartIndex) => {
        let low = 0;
        let high = nums.length - 1;
        let index = -1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (nums[mid] === target) {
                index = mid;

                if (isFindingStartIndex) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return index;
    }

    const startIndex = findBound(nums, target, true);

    if (startIndex === -1) {
        return [-1, -1];
    }

    const endIndex = findBound(nums, target, false);

    return [startIndex, endIndex];
};