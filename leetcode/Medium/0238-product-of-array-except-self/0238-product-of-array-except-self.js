/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const result = new Array(n);

    result[0] = 1;
    for (let i = 1; i < n; i++) {
        result[i] = nums[i - 1] * result[i - 1]
    }

    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] = result[i] * right;
        right = right * nums[i]
    }

    return result;
};