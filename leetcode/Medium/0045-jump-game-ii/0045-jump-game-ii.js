/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length === 1) return 0;
    if (nums[0] >= nums.length - 1) return 1;

    let current = 0;
    let jumps = 0;

    while (current < nums.length - 1) {
        let max = 0;
        let index = current;

        for (let i = current + 1; i <= current + nums[current] && i < nums.length; i++) {

            if (i >= nums.length - 1) {
                return jumps + 1;
            }

            if (i + nums[i] > max) {
                max = i + nums[i];
                index = i;
            }
        }
        current = index;
        jumps++;
    }

    return jumps;
};