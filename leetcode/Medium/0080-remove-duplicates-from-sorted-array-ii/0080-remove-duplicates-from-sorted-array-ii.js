/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 3) return nums.length;
    
    let k = 1;
    let current = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== current) {
            current = nums[i];
            count = 1;
            nums[k] = nums[i]
            k++;
        } else if (nums[i] === current) {
            if (count < 2) {
                nums[k] = nums[i]
                count++
                k++;    
            }
        }
    }

    return k;
};