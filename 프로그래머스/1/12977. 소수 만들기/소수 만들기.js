function isPrime(sum) {
    for (let h = 2; h <= Math.sqrt(sum); h++) {
        if (sum % h === 0) return false;
    }
    return true;
}

function solution(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                console.log(nums[i], nums[j], nums[k])
                if (isPrime(sum)) count++;
            }
        }
    }
    return count;
}