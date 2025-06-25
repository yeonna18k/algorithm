/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map();
    let major = nums[0];

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1 )
    }

    for (let item of map) {
        const [num, times] = item;
        if (times > (nums.length / 2)) major = num;
    }

    return major;
};