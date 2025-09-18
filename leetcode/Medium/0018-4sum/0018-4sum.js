/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
    const n = nums.length;
    const result = [];

    if (n < 4) {
        return result;
    }

    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }

            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);

                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
}