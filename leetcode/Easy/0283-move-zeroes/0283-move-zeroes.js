/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            let jump = 1;
            while (nums[i + jump] === 0) jump++;
            if ((i + jump) >= nums.length) break;
            const temp = nums[i];
            nums[i] = nums[i + jump];
            nums[i + jump] = temp;
        }
    }
    // return nums;
};