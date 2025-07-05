/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const totalMulti = nums.reduce((acc, cur) => acc * cur, 1);

    if (totalMulti === 0) {
        if (nums.join("").split(0).length <= 2) {
            const idx = nums.indexOf(0);
            const total = nums.filter(num => num !== 0).reduce((acc, cur) => acc * cur, 1)
            const arr = new Array(nums.length).fill(0);
            arr[idx] = total;
            return arr;
        } else {
            return new Array(nums.length).fill(0);
        }
    }

    return nums.map(num => totalMulti / num)
};