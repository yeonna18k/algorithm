/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    } else if (nums.length === 2) {
        return Math.max(...nums)
    }

    const set = new Set(nums)
    const arr = [...set].sort((a, b) => b - a)

    if (arr.length < 3) {
        return arr[0];
    }

    return arr[2]
};