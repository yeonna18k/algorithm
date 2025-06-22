Try 1 (18%)

function solution(X, A) {
    for (let i = 0; i < A.length; i++) {
        if (A[i] >= X) return i;
    }
    return -1;
}

