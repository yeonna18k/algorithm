/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {

    for (let i = 0; i < nums.length; i++) {
        const idx = Math.abs(nums[i]);
        if (nums[idx - 1] > 0) {
            nums[idx - 1] *= -1;
        }
    }

    const result = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1)
        }
    }
    return result;
};

// const swap = (index, arr) => {
//     // 받은 배열에 대해 index로 접근해서 값이 뭔지 본다
//     let v = arr[index - 1];
//     if (v === 0) return;
//     arr[index - 1] = 0;
//     return swap(v - 1, arr);
// }

