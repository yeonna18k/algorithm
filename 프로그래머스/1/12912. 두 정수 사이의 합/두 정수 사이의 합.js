function solution(a, b) {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i
    }
    return sum;
}