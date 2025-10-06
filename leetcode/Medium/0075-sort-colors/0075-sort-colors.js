/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0;
    let high = nums.length - 1;
    let current = 0;

    while (current <= high) {
        const value = nums[current]

        if (value === 0) {
            [nums[current], nums[low]] = [nums[low], nums[current]]
            low++;
            current++
        } else if (value === 2) {
            [nums[current], nums[high]] = [nums[high], nums[current]]
            high--;
        } else {
            current++;
        }
console.log(nums)
    }
};