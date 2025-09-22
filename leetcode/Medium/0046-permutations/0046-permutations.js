/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];

    function backtrack(currentPermutation, remainingElements) {
        if (remainingElements.length === 0) {
            result.push([...currentPermutation]);
            return;
        }

        for (let i = 0; i < remainingElements.length; i++) {
            const element = remainingElements[i];
            currentPermutation.push(element);

            const newRemaining = remainingElements.slice(0, i).concat(remainingElements.slice(i + 1));

            backtrack(currentPermutation, newRemaining);

            currentPermutation.pop();
        }
    }

    backtrack([], nums);
    return result;
};