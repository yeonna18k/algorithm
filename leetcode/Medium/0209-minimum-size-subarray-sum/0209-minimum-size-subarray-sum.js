/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const totalSum = nums.reduce((acc, cur) => acc + cur, 0);

    if (totalSum < target) {
        return 0;
    } else if (totalSum === target) {
        return nums.length;
    }

    let left = 0;
    let right;
    let minLength = nums.length;
    let currentSum = 0;

    for (right = 0; right < nums.length; right++) {
        currentSum += nums[right];

        while(currentSum >= target) {
            const length = right - left + 1;
            minLength = length < minLength ? length : minLength;
            currentSum -= nums[left]
            left++;
        }
    }
    return minLength;
};