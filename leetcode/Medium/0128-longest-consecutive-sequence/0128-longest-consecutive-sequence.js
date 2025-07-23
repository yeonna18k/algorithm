/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let maxLength = 0;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentLength += 1;
            }
            maxLength = currentLength > maxLength ? currentLength : maxLength;
        }

    }


    return maxLength;
};