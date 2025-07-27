/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length === 0) return [];

    const arr = [];
    let start = nums[0];
    
    for (let i = 1; i <= nums.length; i++) {
        if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
            const end = nums[i - 1]
            if (start === end) {
                arr.push(`${start}`)
            } else {
                arr.push(`${start}->${end}`)
            }
            if (i < nums.length) {
                start = nums[i]
            }
        }
    }
    return arr;
};