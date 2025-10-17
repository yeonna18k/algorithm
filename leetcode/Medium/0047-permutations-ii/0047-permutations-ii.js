/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const result = [];
    const n = nums.length;

    nums.sort((a, b) => a - b);

    const backtrack = (currentPermutation, used) => {
        if (currentPermutation.length === n) {
            result.push([...currentPermutation]);
            return;
        }

        for (let i = 0; i < n; i++) {
            if (used[i]) {
                continue;
            }

            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
                continue;
            }

            used[i] = true;
            currentPermutation.push(nums[i]);
            backtrack(currentPermutation, used);
            currentPermutation.pop();
            used[i] = false;
        }
    };

    backtrack([], new Array(n).fill(false));

    return result;
};