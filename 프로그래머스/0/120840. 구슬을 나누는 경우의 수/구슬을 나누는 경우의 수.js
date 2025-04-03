function solution(balls, share) {
    if (balls === 1 || balls === share) return 1;
    return factorial(balls) / factorial(balls-share) / factorial(share);
}

function factorial(num) {
    if (BigInt(num) <= 1n) {
        return 1n;
    }    
    return BigInt(num) * factorial(BigInt(num) - 1n)
}