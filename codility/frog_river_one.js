Try 01 (18%)

function solution(X, A) {
    for (let i = 0; i < A.length; i++) {
        if (A[i] >= X) return i;
    }
    return -1;
}

---

Try 02 (100%)

function solution(X, A) {
    const arr = [];
    for (let i = 1; i <= X; i++) arr.push(i)
    
    const set = new Set(arr);

    for (let i = 0; i < A.length; i++) {
        set.delete(A[i])

        if (set.size === 0) return i;
    }

    return -1;
}
