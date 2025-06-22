function solution(A) {
    const sum = A.reduce((acc, cur) => acc + cur, 0)
    let min = sum;
    let firstPart = 0;

    for (let i = 0; i < A.length; i++) {
        firstPart += A[i];
        const diff = Math.abs(sum - (firstPart * 2))
        if (diff < min) {
            min = diff
        }
    }

    return min;
}
