/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) {
        return nums[0]
    }

    let left = 0;
    let right = nums.length - 1;

    let sum = nums.reduce((acc, cur) => acc + cur, 0);
    let max = sum;

    while (left < right) {
        if (nums[left] < nums[right]) {
            sum -= nums[left]
            left++;
        } else {
            sum -= nums[right]
            right--;
        }
        max = max < sum ? sum : max
    }

    return max;
};