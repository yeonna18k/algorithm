/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length === 1) {
        return nums.map(n => n.toString())
    } else if (nums.length === 0) {
        return nums;
    }
    
    const arr = [];
    let start = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            continue
        } else {
            if (start === nums[i - 1]) {
                arr.push(`${start}`)
            } else {
                arr.push(`${start}->${nums[i - 1]}`)
            }
            start = nums[i];
        }
    }

    if (start === nums.at(-1)) {
        arr.push(`${start}`)
    } else {
        arr.push(`${start}->${nums.at(-1)}`)
    }
    return arr;
};