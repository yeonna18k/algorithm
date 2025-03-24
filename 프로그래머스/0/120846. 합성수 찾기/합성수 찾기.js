function solution(n) {
    let sum = 0;
    for (let i = 4; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                sum++;
                break;
            }
        }
    }
    return sum;
}