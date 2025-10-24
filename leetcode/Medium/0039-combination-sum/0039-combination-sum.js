/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
   const result = [];
    function backtrack(startIndex, currentCombination, currentSum) {
        if (currentSum === target) {
            result.push([...currentCombination]);
            return;
        }

        if (currentSum > target) {
            return;
        }

        for (let i = startIndex; i < candidates.length; i++) {
            const candidate = candidates[i];
            
            currentCombination.push(candidate);
            
            backtrack(i, currentCombination, currentSum + candidate);
            
            currentCombination.pop();
        }
    }

    backtrack(0, [], 0);
    
    return result;
};