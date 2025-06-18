function solution(A, K) {
    const rotate = A.length % K;
    const shifted = A.splice(-K)

    return shifted.concat(A);
}
