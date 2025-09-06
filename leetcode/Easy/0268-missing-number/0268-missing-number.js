/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const arr = new Array(nums.length + 1).fill(0);

    for (const num of nums) {
        arr[num] = 1;
    }

    return arr.indexOf(0);
};