/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const idx = k % nums.length;
    const rotate = nums.splice(-idx);
    nums.unshift(...rotate)
};