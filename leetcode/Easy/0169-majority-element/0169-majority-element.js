/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let num = nums[0]
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            num = nums[i]
            count++;
        } else if (num === nums[i]) {
            count++;
        } else {
            count--;
        }
    }
    return num;
};