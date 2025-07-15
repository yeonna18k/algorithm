/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (nums.length === 1) return nums[0];
    nums.sort((a, b) => a - b)

    let count = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            count = i - count;
        }
        if (count > nums.length / 2) {
            return nums[i - 1] 
        }
    }

    return nums.at(-1)
};