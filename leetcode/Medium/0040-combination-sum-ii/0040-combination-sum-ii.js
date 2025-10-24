/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [];

    candidates.sort((a, b) => a - b);

    /**
     * @param {number} startIndex - candidates 배열에서 탐색을 시작할 인덱스
     * @param {number[]} currentCombination - 현재까지 만들어진 조합
     * @param {number} currentSum - 현재 조합의 합
     */
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

            if (i > startIndex && candidates[i] === candidates[i - 1]) {
                continue;
            }

            currentCombination.push(candidate);
            
            backtrack(i + 1, currentCombination, currentSum + candidate);

            currentCombination.pop();
        }
    }

    backtrack(0, [], 0);
    
    return result;
};